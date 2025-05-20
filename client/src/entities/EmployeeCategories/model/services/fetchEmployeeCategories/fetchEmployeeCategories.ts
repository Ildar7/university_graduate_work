import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    EmployeeCategoriesData,
    EmployeeCategoriesError,
} from '../../types/employeeCategories';
import {
    getEmployeeCategoriesPage,
} from '../../selectors/getEmployeeCategoriesPage/getEmployeeCategoriesPage';
import {
    getEmployeeCategoriesLimit,
} from '../../selectors/getEmployeeCategoriesLimit/getEmployeeCategoriesLimit';

export const fetchEmployeeCategories = createAsyncThunk<EmployeeCategoriesData, void, ThunkConfig<EmployeeCategoriesError>>(
    'employees/fetchEmployeeCategories',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEmployeeCategoriesPage,
            limitSelector: getEmployeeCategoriesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/human-resources/categories/', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EmployeeCategoriesData>(requestUrl);

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
