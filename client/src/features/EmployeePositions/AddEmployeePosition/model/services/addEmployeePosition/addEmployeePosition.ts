import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeePositions } from 'entities/EmployeePositions';
import {
    getAddEmployeePositionData,
} from '../../selectors/getAddEmployeePosition/getAddEmployeePosition';
import { addEmployeePositionActions } from '../../slice/addEmployeePositionSlice';
import { AddEmployeePositionErrors, AddEmployeePositionType } from '../../types/addEmployeePosition';

export const addEmployeePosition = createAsyncThunk<AddEmployeePositionType, void, ThunkConfig<AddEmployeePositionErrors>>(
    'employeePositions/addEmployeeEducation',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeePositionData = getAddEmployeePositionData(getState() as any);

        try {
            const response = await extra.api.post<AddEmployeePositionType>('/human-resources/positions/', addNewEmployeePositionData);

            dispatch(fetchEmployeePositions());
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
