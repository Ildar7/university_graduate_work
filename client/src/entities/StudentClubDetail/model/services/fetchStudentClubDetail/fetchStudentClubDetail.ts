import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StudentClubDetailType } from 'entities/StudentClubDetail/model/types/studentClubDetail';
import { editStudentClubActions } from 'features/StudentClubs/EditStudentClub';

export const fetchStudentClubDetail = createAsyncThunk<StudentClubDetailType, string, ThunkConfig<string>>(
    'studentClubs/fetchStudentClubDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<StudentClubDetailType>(`/college/students/clubs/${id}`);

            dispatch(editStudentClubActions.setStudentClubData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
