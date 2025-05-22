import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchCurriculumSubjects } from 'entities/CurriculumSubjects';
import { fetchCurriculumSubjectsDetail } from 'entities/CurriculumSubjectsDetail';
import { EditCurriculumSubjectErrors } from '../../types/editCurriculumSubject';
import {
    getEditCurriculumSubjectNewFieldsData,
} from '../../selectors/getEditCurriculumSubjectNewFieldsData/getEditCurriculumSubjectNewFieldsData';

export const editCurriculumSubject = createAsyncThunk<void, string, ThunkConfig<EditCurriculumSubjectErrors>>(
    'references/editCurriculumSubject',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const curriculumSubjectNewData = getEditCurriculumSubjectNewFieldsData(getState() as any);

        const data = {
            name: curriculumSubjectNewData?.name,
            module_id: curriculumSubjectNewData?.module_id,
            unit_id: curriculumSubjectNewData?.unit_id,
        };

        try {
            const response = await extra.api.put<void>(`/curriculum/subjects/${id}`, data);

            dispatch(fetchCurriculumSubjects());
            dispatch(fetchCurriculumSubjectsDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
