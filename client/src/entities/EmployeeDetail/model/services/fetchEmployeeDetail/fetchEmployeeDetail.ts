import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editEmployeeActions } from 'features/Employees/EditEmployee';
import { EmployeeDetailType } from '../../types/employeeDetail';

export const fetchEmployeeDetail = createAsyncThunk<EmployeeDetailType, string, ThunkConfig<string>>(
    'employees/fetchEmployeeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EmployeeDetailType>(`/human-resources/employees/${id}`);

            dispatch(editEmployeeActions.setEmployeeData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
