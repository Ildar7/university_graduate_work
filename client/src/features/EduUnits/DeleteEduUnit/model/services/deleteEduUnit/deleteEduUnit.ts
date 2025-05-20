import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';

export const deleteEduUnit = createAsyncThunk<void, string[], ThunkConfig<string>>(
    'reference/deleteEduUnit',
    async ([moduleId, unitId], thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/educational-modules/${moduleId}/units/${unitId}`);

            dispatch(fetchEducationalModules());
            dispatch(fetchEducationalUnits());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
