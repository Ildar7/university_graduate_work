import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EmployeeCategoryDetailType } from 'entities/EmployeeCategoryDetail/model/types/employeeCategoryDetail';
import { editEmployeeCategoryActions } from 'features/EmployeeCategories/EditEmployeeCategory';

export const fetchEmployeeCategoryDetail = createAsyncThunk<EmployeeCategoryDetailType, string, ThunkConfig<string>>(
    'employeeCategories/fetchEmployeeEducationDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EmployeeCategoryDetailType>(`/human-resources/categories/${id}`);

            dispatch(editEmployeeCategoryActions.setEmployeeCategoryData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
