import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddStudentClubErrors, AddStudentClubType } from 'features/StudentClubs/AddStudentClub';
import { fetchStudentClubs } from 'entities/StudentClubs/model/services/fetchStudentClubs/fetchStudentClubs';
import { getAddStudentClubTitle } from '../../selectors/getAddStudentClubTitle/getAddStudentClubTitle';
import { addStudentClubActions } from '../../slice/addStudentClubSlice';

export const addStudentClub = createAsyncThunk<AddStudentClubType, void, ThunkConfig<AddStudentClubErrors>>(
    'studentClubs/addStudentClub',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addStudentClubTitle = getAddStudentClubTitle(getState() as any);

        const data = {
            name: addStudentClubTitle,
        };

        try {
            const response = await extra.api.post<AddStudentClubType>('/college/students/clubs/', data);

            dispatch(fetchStudentClubs());
            dispatch(addStudentClubActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
