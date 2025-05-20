import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentClubs } from 'entities/StudentClubs';
import {
    fetchStudentClubDetail,
} from 'entities/StudentClubDetail/model/services/fetchStudentClubDetail/fetchStudentClubDetail';
import { EditStudentClubErrors } from '../../types/editStudentClub';
import {
    getEditStudentClubNewFieldsData,
} from '../../selectors/getEditStudentClubNewFieldsData/getEditStudentClubNewFieldsData';

export const editStudentClub = createAsyncThunk<void, string, ThunkConfig<EditStudentClubErrors>>(
    'studentClubs/editStudentClub',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const studentClubNewData = getEditStudentClubNewFieldsData(getState() as any);

        const data = {
            name: studentClubNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/students/clubs/${id}`, data);

            dispatch(fetchStudentClubs());
            dispatch(fetchStudentClubDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
