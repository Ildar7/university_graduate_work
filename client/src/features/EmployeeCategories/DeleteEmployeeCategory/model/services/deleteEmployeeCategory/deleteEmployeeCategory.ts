import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeCategories } from 'entities/EmployeeCategories';

export const deleteEmployeeCategory = createAsyncThunk<void, string, ThunkConfig<string>>(
    'employeeCategory/deleteStudentGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/human-resources/categories/${id}`);

            dispatch(fetchEmployeeCategories());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
