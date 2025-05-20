import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStandardCurriculum } from 'entities/StandardCurriculum';

export const deleteStandardCurriculum = createAsyncThunk<void, string, ThunkConfig<string>>(
    'standardCurriculum/deleteStandardCurriculum',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/standard-curricula/${id}`);

            dispatch(fetchStandardCurriculum());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
