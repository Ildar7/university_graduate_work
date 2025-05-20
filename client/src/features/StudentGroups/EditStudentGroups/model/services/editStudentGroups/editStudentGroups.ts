import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentGroups } from 'entities/StudentGroups';
import { fetchStudentGroupDetail } from 'entities/StudentGroupDetail';
import { EditStudentGroupsErrors } from '../../types/editStudentGroups';
import { getEditStudentGroupsNewFields } from '../../selectors/getEditStudentGroups/getEditStudentGroups';

export const editStudentGroups = createAsyncThunk<void, string, ThunkConfig<EditStudentGroupsErrors>>(
    'studentGroups/editStudentGroups',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const studentGroupNewData = getEditStudentGroupsNewFields(getState() as any);

        try {
            const response = await extra.api.put<void>(`/college/groups/${id}`, studentGroupNewData);

            dispatch(fetchStudentGroups());
            dispatch(fetchStudentGroupDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
