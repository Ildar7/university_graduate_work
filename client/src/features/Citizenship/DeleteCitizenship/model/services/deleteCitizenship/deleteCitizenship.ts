import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchCitizenship } from 'entities/Citizenship';

export const deleteCitizenship = createAsyncThunk<void, string, ThunkConfig<string>>(
    'citizenship/deleteCurriculumSubject',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/citizenship/${id}`);

            dispatch(fetchCitizenship());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
