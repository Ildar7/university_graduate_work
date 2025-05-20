import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EducationalModulesAndUnitsError, EducationalModulesData } from '../../types/educationalModules';

export const fetchEducationalModules = createAsyncThunk<EducationalModulesData[], void, ThunkConfig<EducationalModulesAndUnitsError>>(
    'references/fetchEducationalModules',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<EducationalModulesData[]>('/curriculum/educational-modules');

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
