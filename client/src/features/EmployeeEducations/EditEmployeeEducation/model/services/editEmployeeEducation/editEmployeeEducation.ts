import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeEducationDetail } from 'entities/EmployeeEducationDetail';
import { fetchEmployeeEducations } from 'entities/EmployeeEducations';
import {
    getEditEmployeeEducationNewFields,
} from '../../selectors/getEditEmployeeEducation/getEditEmployeeEducation';
import { EditEmployeeEducationErrors } from '../../types/editEmployeeEducation';

export const editEmployeeEducation = createAsyncThunk<void, string, ThunkConfig<EditEmployeeEducationErrors>>(
    'employeeEducations/editStudentGroups',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const employeeEducationNewData = getEditEmployeeEducationNewFields(getState() as any);

        try {
            const response = await extra.api.put<void>(`/human-resources/educations/${id}`, employeeEducationNewData);

            dispatch(fetchEmployeeEducations());
            dispatch(fetchEmployeeEducationDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
