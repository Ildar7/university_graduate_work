import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeCategories } from 'entities/EmployeeCategories';
import {
    getAddEmployeeCategoryData,
} from '../../selectors/getAddEmployeeCategory/getAddEmployeeCategory';
import { addEmployeeCategoryActions } from '../../slice/addEmployeeCategorySlice';
import { AddEmployeeCategoryErrors, AddEmployeeCategoryType } from '../../types/addEmployeeCategory';

export const addEmployeeCategory = createAsyncThunk<AddEmployeeCategoryType, void, ThunkConfig<AddEmployeeCategoryErrors>>(
    'employeeCategories/addEmployeeEducation',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeeCategoryData = getAddEmployeeCategoryData(getState() as any);

        try {
            const response = await extra.api.post<AddEmployeeCategoryType>('/human-resources/categories/', addNewEmployeeCategoryData);

            dispatch(fetchEmployeeCategories());
            dispatch(addEmployeeCategoryActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
