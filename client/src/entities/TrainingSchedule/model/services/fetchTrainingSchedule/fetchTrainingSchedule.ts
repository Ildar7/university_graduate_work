import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { TrainingScheduleError, TrainingScheduleType } from '../../types/trainingSchedule';

export const fetchTrainingSchedule = createAsyncThunk<TrainingScheduleType[], void, ThunkConfig<TrainingScheduleError>>(
    'trainingSchedule/fetchTrainingSchedule',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<TrainingScheduleType[]>('/curriculum/training-schedule/all-available');

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
