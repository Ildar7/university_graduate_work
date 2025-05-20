import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    WorkingCurriculumTrainingScheduleSymbol,
} from '../../types/workingCurriculumTrainingSchedule';
import { WorkingCurriculumTrainingScheduleError } from '../../types/workingCurriculumTrainingScheduleSchema';

export const fetchWorkingCurriculumSymbols = createAsyncThunk<
    WorkingCurriculumTrainingScheduleSymbol[],
    void,
    ThunkConfig<WorkingCurriculumTrainingScheduleError>
>(
    'workingCurriculum/fetchWorkingCurriculumSymbols',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<WorkingCurriculumTrainingScheduleSymbol[]>('/curriculum/working-curriculum/symbols/');

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
