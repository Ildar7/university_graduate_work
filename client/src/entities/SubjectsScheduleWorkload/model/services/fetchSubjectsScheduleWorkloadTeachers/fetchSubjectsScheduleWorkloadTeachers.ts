import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    SubjectsScheduleWorkloadTeachersData,
} from '../../types/subjectsScheduleWorkloadTeachers';
import {
    SubjectsScheduleWorkloadError,
} from '../../types/subjectsScheduleWorkloadSchema';

export const fetchSubjectsScheduleWorkloadTeachers = createAsyncThunk<
    SubjectsScheduleWorkloadTeachersData,
    string[],
    ThunkConfig<SubjectsScheduleWorkloadError>
>(
    'subjectsScheduleWorkload/fetchSubjectsScheduleWorkloadTeachers',
    async ([year, week], thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<SubjectsScheduleWorkloadTeachersData>(
                `/curriculum/subject-schedule/${year}/${week}/teacher-workload/`,
            );

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
