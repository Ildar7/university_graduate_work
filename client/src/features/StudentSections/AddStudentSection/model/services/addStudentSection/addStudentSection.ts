import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddStudentSectionErrors, AddStudentSectionType } from 'features/StudentSections/AddStudentSection';
import { fetchStudentSections } from 'entities/StudentSections/model/services/fetchStudentSections/fetchStudentSections';
import { getAddStudentSectionTitle } from '../../selectors/getAddStudentSectionTitle/getAddStudentSectionTitle';
import { addStudentSectionActions } from '../../slice/addStudentSectionSlice';

export const addStudentSection = createAsyncThunk<AddStudentSectionType, void, ThunkConfig<AddStudentSectionErrors>>(
    'studentSections/addStudentSection',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addStudentSectionTitle = getAddStudentSectionTitle(getState() as any);

        const data = {
            name: addStudentSectionTitle,
        };

        try {
            const response = await extra.api.post<AddStudentSectionType>('/college/student-sections/', data);

            dispatch(fetchStudentSections());
            dispatch(addStudentSectionActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
