import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeCategoryDetail } from 'entities/EmployeeCategoryDetail';
import { fetchEmployeeCategories } from 'entities/EmployeeCategories';
import {
    getEditEmployeeCategoryNewFields,
} from '../../selectors/getEditEmployeeCategory/getEditEmployeeCategory';
import { EditEmployeeCategoryErrors } from '../../types/editEmployeeCategory';

export const editEmployeeCategory = createAsyncThunk<void, string, ThunkConfig<EditEmployeeCategoryErrors>>(
    'employeeCategories/editStudentGroups',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const employeeCategoryNewData = getEditEmployeeCategoryNewFields(getState() as any);

        try {
            const response = await extra.api.put<void>(`/human-resources/categories/${id}`, employeeCategoryNewData);

            dispatch(fetchEmployeeCategories());
            dispatch(fetchEmployeeCategoryDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
