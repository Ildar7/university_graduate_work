import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editStudentGroupsActions } from 'features/StudentGroups/EditStudentGroups';
import { StudentGroupDetailType } from '../../types/studentGroupDetail';

export const fetchStudentGroupDetail = createAsyncThunk<StudentGroupDetailType, string, ThunkConfig<string>>(
    'studentGroups/fetchStudentGroupDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<StudentGroupDetailType>(`/college/groups/${id}`);

            const editData = {
                name: response.data.name,
                enrollment_year: response.data.enrollment_year,
                id_specialty: response.data.id_specialty,
                qualifications: response.data.qualifications.map((qualification: any) => qualification.id_qual),
                course: response.data.course,
                study_duration: response.data.study_duration,
                is_full_time: response.data.is_full_time,
                short_name: response.data.short_name,
                serial_number: response.data.serial_number,
            };

            dispatch(editStudentGroupsActions.setStudentGroupData(editData));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
