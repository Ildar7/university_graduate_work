import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployees } from 'entities/Employees';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail';

export const deleteEmployeePositionToEmployee = createAsyncThunk<void, [number[], string], ThunkConfig<string>>(
    'employees/deleteEmployeePositionToEmployee',
    async ([delArr, id], thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        const data = {
            position_ids: delArr,
        };

        try {
            const response = await extra.api.delete<void>(
                `/human-resources/employees/${id}/positions`,
                {
                    data,
                },
            );

            dispatch(fetchEmployees());
            dispatch(fetchEmployeeDetail(id));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
