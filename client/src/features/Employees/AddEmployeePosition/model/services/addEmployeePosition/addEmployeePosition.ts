import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployees } from 'entities/Employees';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail';
import { getAddEmployeePositionToEmployeeData } from '../../selectors/getAddEmployeePosition/getAddEmployeePosition';
import { addEmployeePositionActions } from '../../slice/addEmployeePositionSlice';
import { AddEmployeePositionErrors, AddEmployeePositionType } from '../../types/addEmployeePosition';

export const addEmployeePosition = createAsyncThunk<AddEmployeePositionType, string, ThunkConfig<AddEmployeePositionErrors>>(
    'employeePositions/addEmployeePosition',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeePositionData = getAddEmployeePositionToEmployeeData(getState() as any);

        try {
            const response = await extra.api.post<AddEmployeePositionType>(`/human-resources/employees/${id}/positions`, addNewEmployeePositionData);

            dispatch(fetchEmployees());
            dispatch(fetchEmployeeDetail(id));
            dispatch(addEmployeePositionActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
