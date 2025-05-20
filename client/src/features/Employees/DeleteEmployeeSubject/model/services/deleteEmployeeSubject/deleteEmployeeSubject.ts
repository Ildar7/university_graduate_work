import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail';

export const deleteEmployeeSubject = createAsyncThunk<void, string[], ThunkConfig<string>>(
    'employeeSubjects/deleteEmployeeSubject',
    async ([id, subjectId], thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/human-resources/employees/${id}/subject/${subjectId}`);

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
