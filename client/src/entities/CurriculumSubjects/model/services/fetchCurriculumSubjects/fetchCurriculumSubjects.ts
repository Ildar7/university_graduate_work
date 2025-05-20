import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    CurriculumSubjectsData,
    CurriculumSubjectsError, CurriculumSubjectsType,
} from 'entities/CurriculumSubjects/model/types/curriculumSubjects';

export const fetchCurriculumSubjects = createAsyncThunk<CurriculumSubjectsType[], void, ThunkConfig<CurriculumSubjectsError>>(
    'references/fetchCurriculumSubjects',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<CurriculumSubjectsType[]>('/curriculum/subjects/');

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
