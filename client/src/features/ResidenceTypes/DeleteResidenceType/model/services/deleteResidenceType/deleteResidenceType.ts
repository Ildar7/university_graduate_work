import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchResidenceTypes } from 'entities/ResidenceTypes';

export const deleteResidenceType = createAsyncThunk<void, string, ThunkConfig<string>>(
    'residenceTypes/deleteResidenceType',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/residence-types/${id}`);

            dispatch(fetchResidenceTypes());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
