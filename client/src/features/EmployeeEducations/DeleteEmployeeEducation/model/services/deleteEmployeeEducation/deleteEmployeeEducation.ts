import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeEducations } from 'entities/EmployeeEducations';

export const deleteEmployeeEducation = createAsyncThunk<void, string, ThunkConfig<string>>(
    'employeeEducation/deleteStudentGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/human-resources/educations/${id}`);

            dispatch(fetchEmployeeEducations());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
