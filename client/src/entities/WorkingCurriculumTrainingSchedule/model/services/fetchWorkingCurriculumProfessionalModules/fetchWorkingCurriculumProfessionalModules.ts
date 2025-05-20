import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    WorkingCurriculumTrainingScheduleError,
} from '../../types/workingCurriculumTrainingScheduleSchema';
import {
    WorkingCurriculumProfessionalModules,
} from '../../types/workingCurriculumProfessionalModules';

export const fetchWorkingCurriculumProfessionalModules = createAsyncThunk<
    WorkingCurriculumProfessionalModules[],
    string,
    ThunkConfig<WorkingCurriculumTrainingScheduleError>
>(
    'workingCurriculum/fetchWorkingCurriculumProfessionalModules',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<WorkingCurriculumProfessionalModules[]>(`/curriculum/standard-curricula/${id}/professional-units`);

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
