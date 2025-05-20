import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StandardCurriculumError, StandardCurriculumType } from '../../types/standardCurriculum';

export const fetchStandardCurriculum = createAsyncThunk<StandardCurriculumType[], void, ThunkConfig<StandardCurriculumError>>(
    'standardCurriculum/fetchStandardCurriculum',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<StandardCurriculumType[]>('/curriculum/standard-curricula/');

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
