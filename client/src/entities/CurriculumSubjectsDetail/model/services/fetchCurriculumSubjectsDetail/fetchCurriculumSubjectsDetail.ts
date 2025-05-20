import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CurriculumSubjectsDetailType } from 'entities/CurriculumSubjectsDetail/model/types/curriculumSubjectsDetail';
import { editCurriculumSubjectActions } from 'features/CurriculumSubjects/EditCurriculumSubject';

export const fetchCurriculumSubjectsDetail = createAsyncThunk<CurriculumSubjectsDetailType, string, ThunkConfig<string>>(
    'references/fetchCurriculumSubjectsDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<CurriculumSubjectsDetailType>(`/curriculum/subjects/${id}`);

            dispatch(editCurriculumSubjectActions.setCurriculumSubjectData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
