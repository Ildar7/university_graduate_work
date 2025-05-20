import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchFinSources } from 'entities/FinSources';

export const deleteFinSource = createAsyncThunk<void, string, ThunkConfig<string>>(
    'finSources/deleteFinSource',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/financing-sources/${id}`);

            dispatch(fetchFinSources());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
