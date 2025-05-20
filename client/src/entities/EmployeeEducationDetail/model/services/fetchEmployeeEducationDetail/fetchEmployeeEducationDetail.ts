import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editEmployeeEducationActions } from 'features/EmployeeEducations/EditEmployeeEducation';
import { EmployeeEducationDetailType } from '../../types/employeeEducationDetail';

export const fetchEmployeeEducationDetail = createAsyncThunk<EmployeeEducationDetailType, string, ThunkConfig<string>>(
    'employeeEducations/fetchEmployeeEducationDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EmployeeEducationDetailType>(`/human-resources/educations/${id}`);

            dispatch(editEmployeeEducationActions.setEmployeeEducationData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
