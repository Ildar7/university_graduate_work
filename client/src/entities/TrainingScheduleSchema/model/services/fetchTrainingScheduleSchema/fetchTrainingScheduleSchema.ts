import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { TrainingScheduleHeaderSchemaData } from '../../types/trainingScheduleSchema';

export const fetchTrainingScheduleSchema = createAsyncThunk<
    TrainingScheduleHeaderSchemaData,
    string,
    ThunkConfig<string>
>(
    'trainingSchedule/fetchTrainingScheduleSchema',
    async (year, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<TrainingScheduleHeaderSchemaData>(
                `/curriculum/training-schedule/schema?academic_year=${year}`,
            );

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
