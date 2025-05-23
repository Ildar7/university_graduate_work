import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    CurriculumSubjectsError,
    CurriculumSubjectsType,
    CurriculumSubjectsTypeData,
} from 'entities/CurriculumSubjects/model/types/curriculumSubjects';

export const fetchCurriculumSubjects = createAsyncThunk<CurriculumSubjectsType[], void, ThunkConfig<CurriculumSubjectsError>>(
    'references/fetchCurriculumSubjects',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<CurriculumSubjectsTypeData>('/curriculum/subjects/') as any;

            return response.data.data;
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
