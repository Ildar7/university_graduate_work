import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchSpecialties } from 'entities/Specialties';

export const deleteSpeciality = createAsyncThunk<void, string, ThunkConfig<string>>(
    'specialties/deleteStandardCurriculum',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/specialties/${id}`);

            dispatch(fetchSpecialties());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
