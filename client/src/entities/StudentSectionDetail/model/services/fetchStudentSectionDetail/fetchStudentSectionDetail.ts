import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StudentSectionDetailType } from 'entities/StudentSectionDetail/model/types/studentSectionDetail';
import { editStudentSectionActions } from 'features/StudentSections/EditStudentSection';

export const fetchStudentSectionDetail = createAsyncThunk<StudentSectionDetailType, string, ThunkConfig<string>>(
    'studentSections/fetchStudentSectionDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<StudentSectionDetailType>(`/college/student-sections/${id}`);

            dispatch(editStudentSectionActions.setStudentSectionData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
