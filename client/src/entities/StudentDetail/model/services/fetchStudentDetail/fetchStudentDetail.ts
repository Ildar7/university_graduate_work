import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editStudentActions } from 'features/Students/EditStudent';
import { StudentDetailType } from '../../types/studentDetail';

export const fetchStudentDetail = createAsyncThunk<StudentDetailType, string, ThunkConfig<string>>(
    'students/fetchEmployeeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<StudentDetailType>(`/college/students/${id}`);

            dispatch(editStudentActions.setStudentData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
