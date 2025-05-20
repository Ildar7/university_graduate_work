import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployees } from 'entities/Employees';

export const deleteEmployee = createAsyncThunk<void, string, ThunkConfig<string>>(
    'employees/deleteEmployeeGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/human-resources/employees/${id}`);

            dispatch(fetchEmployees());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
