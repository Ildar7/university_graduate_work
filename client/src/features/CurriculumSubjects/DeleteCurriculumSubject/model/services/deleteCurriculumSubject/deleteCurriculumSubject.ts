import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchCurriculumSubjects } from 'entities/CurriculumSubjects';

export const deleteCurriculumSubject = createAsyncThunk<void, string, ThunkConfig<string>>(
    'references/deleteCurriculumSubject',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/subjects/${id}`);

            dispatch(fetchCurriculumSubjects());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
