import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { TrainingScheduleDetailError, TrainingScheduleDetailType } from '../../types/trainingScheduleDetail';

export const fetchTrainingScheduleDetail = createAsyncThunk<
    TrainingScheduleDetailType[],
    string,
    ThunkConfig<TrainingScheduleDetailError>
>(
    'trainingSchedule/fetchTrainingScheduleDetail',
    async (year, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<TrainingScheduleDetailType[]>(
                `/curriculum/training-schedule/?academic_year=${year}`,
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
