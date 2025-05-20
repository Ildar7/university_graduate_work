import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchPracticeTypes } from 'entities/PracticeTypes';

export const deletePracticeType = createAsyncThunk<void, string, ThunkConfig<string>>(
    'practiceTypes/deletePracticeType',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/practice-types/${id}`);

            dispatch(fetchPracticeTypes());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
