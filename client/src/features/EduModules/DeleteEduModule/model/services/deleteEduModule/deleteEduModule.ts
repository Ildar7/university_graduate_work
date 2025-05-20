import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';

export const deleteEduModule = createAsyncThunk<void, string, ThunkConfig<string>>(
    'reference/deleteEduUnit',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/educational-modules/${id}`);

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
