import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    SubjectsScheduleWorkloadClassRoomsData,
} from '../../types/subjectsScheduleWorkloadClassRooms';
import { SubjectsScheduleWorkloadError } from '../../types/subjectsScheduleWorkloadSchema';

export const fetchSubjectsScheduleWorkloadClassRooms = createAsyncThunk<
    SubjectsScheduleWorkloadClassRoomsData,
    string[],
    ThunkConfig<SubjectsScheduleWorkloadError>
>(
    'subjectsScheduleWorkload/fetchSubjectsScheduleWorkloadClassRooms',
    async ([year, week], thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<SubjectsScheduleWorkloadClassRoomsData>(
                `/curriculum/subject-schedule/${year}/${week}/classroom-workload/`,
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
