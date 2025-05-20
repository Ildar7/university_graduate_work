import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SubjectsScheduleDetailError } from '../../types/subjectsScheduleDetailSchema';
import { SubjectsScheduleDetailClassTimeData } from '../../types/subjectsScheduleDetailClassTime';

export const fetchSubjectsScheduleClassTime = createAsyncThunk<
    SubjectsScheduleDetailClassTimeData[],
    void,
    ThunkConfig<SubjectsScheduleDetailError>
>(
    'subjectsScheduleDetail/fetchSubjectsScheduleClassTime',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<SubjectsScheduleDetailClassTimeData[]>('/curriculum/subject-schedule/class-time/');

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
