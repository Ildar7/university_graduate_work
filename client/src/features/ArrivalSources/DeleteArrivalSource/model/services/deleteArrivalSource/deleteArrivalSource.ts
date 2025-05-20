import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArrivalSources } from 'entities/ArrivalSources';

export const deleteArrivalSource = createAsyncThunk<void, string, ThunkConfig<string>>(
    'arrivalSources/deleteArrivalSource',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/student-arrival-sources/${id}`);

            dispatch(fetchArrivalSources());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
