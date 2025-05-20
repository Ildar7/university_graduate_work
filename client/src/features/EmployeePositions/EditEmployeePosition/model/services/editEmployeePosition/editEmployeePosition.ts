import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeePositionDetail } from 'entities/EmployeePositionDetail';
import { fetchEmployeePositions } from 'entities/EmployeePositions';
import {
    getEditEmployeePositionNewFields,
} from '../../selectors/getEditEmployeePosition/getEditEmployeePosition';
import { EditEmployeePositionErrors } from '../../types/editEmployeePosition';

export const editEmployeePosition = createAsyncThunk<void, string, ThunkConfig<EditEmployeePositionErrors>>(
    'employeePositions/editStudentGroups',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const employeePositionNewData = getEditEmployeePositionNewFields(getState() as any);

        try {
            const response = await extra.api.put<void>(`/human-resources/positions/${id}`, employeePositionNewData);

            dispatch(fetchEmployeePositions());
            dispatch(fetchEmployeePositionDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
