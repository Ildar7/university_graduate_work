import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchCurriculumSubjects } from 'entities/CurriculumSubjects';
import { AddCurriculumSubjectErrors, AddCurriculumSubjectType } from '../../types/addCurriculumSubject';
import { addCurriculumSubjectActions } from '../../slice/addCurriculumSubjectSlice';

export const addCurriculumSubject = createAsyncThunk<
    AddCurriculumSubjectType,
    AddCurriculumSubjectType,
    ThunkConfig<AddCurriculumSubjectErrors>
>(
    'references/addCurriculumSubject',
    async (data, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch,
        } = thunkAPI;

        try {
            const response = await extra.api.post<AddCurriculumSubjectType>('/curriculum/subjects/', data);

            dispatch(fetchCurriculumSubjects());
            dispatch(addCurriculumSubjectActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
