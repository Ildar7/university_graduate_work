import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editEmployeePositionActions } from 'features/EmployeePositions/EditEmployeePosition';
import { EmployeePositionDetailType } from '../../types/employeePositionDetail';

export const fetchEmployeePositionDetail = createAsyncThunk<EmployeePositionDetailType, string, ThunkConfig<string>>(
    'employeePositions/fetchEmployeeEducationDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EmployeePositionDetailType>(`/human-resources/positions/${id}`);

            dispatch(editEmployeePositionActions.setEmployeePositionData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
