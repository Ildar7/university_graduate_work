import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SubjectsScheduleError } from '../../types/subjectsSchedule';

export const fetchSubjectsScheduleAvailableYears = createAsyncThunk<number[], void, ThunkConfig<SubjectsScheduleError>>(
    'subjectsSchedule/fetchSubjectsScheduleAvailableYears',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<number[]>('/curriculum/subject-schedule/available-years');

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
