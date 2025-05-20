import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EducationalModulesAndUnitsError, EducationalUnitsData } from '../../types/educationalModules';

export const fetchEducationalUnits = createAsyncThunk<EducationalUnitsData[], void, ThunkConfig<EducationalModulesAndUnitsError>>(
    'references/fetchEducationalUnits',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<EducationalUnitsData[]>('/curriculum/educational-modules/units');

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
