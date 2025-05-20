import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeePositions } from 'entities/EmployeePositions';

export const deleteEmployeePosition = createAsyncThunk<void, string, ThunkConfig<string>>(
    'employeePosition/deleteStudentGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/human-resources/positions/${id}`);

            dispatch(fetchEmployeePositions());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
