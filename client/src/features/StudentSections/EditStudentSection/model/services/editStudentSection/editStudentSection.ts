import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentSections } from 'entities/StudentSections';
import {
    fetchStudentSectionDetail,
} from 'entities/StudentSectionDetail/model/services/fetchStudentSectionDetail/fetchStudentSectionDetail';
import { EditStudentSectionErrors } from '../../types/editStudentSection';
import {
    getEditStudentSectionNewFieldsData,
} from '../../selectors/getEditStudentSectionNewFieldsData/getEditStudentSectionNewFieldsData';

export const editStudentSection = createAsyncThunk<void, string, ThunkConfig<EditStudentSectionErrors>>(
    'studentSections/editStudentSection',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const studentSectionNewData = getEditStudentSectionNewFieldsData(getState() as any);

        const data = {
            name: studentSectionNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/student-sections/${id}`, data);

            dispatch(fetchStudentSections());
            dispatch(fetchStudentSectionDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
