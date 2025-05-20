import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getEmployeesLimit, getEmployeesPage } from 'entities/Employees';
import { getRouteEmployees } from 'shared/const/router';
import { EmployeesData, EmployeesError } from '../../types/employees';

export const fetchEmployees = createAsyncThunk<EmployeesData, void, ThunkConfig<EmployeesError>>(
    'employees/fetchEmployees',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const selectedSortField = getTableSortField(getState() as StateSchema);
        const selectedSortOrderField = getTableSortOrderField(getState() as StateSchema);

        const page = getEmployeesPage(getState() as StateSchema);
        const limit = getEmployeesLimit(getState() as StateSchema);

        const selectedSort = {
            sort: window.location.pathname === getRouteEmployees() ? selectedSortField! : 'employee_id',
            order: selectedSortOrderField!,
        };

        const sort = new URLSearchParams(selectedSort).toString();

        const paginationParams = new URLSearchParams();

        if (page !== undefined) {
            paginationParams.append('page', page.toString());
        }

        if (limit !== undefined) {
            paginationParams.append('limit', limit.toString());
        }

        const requestUrl = `/human-resources/employees?${paginationParams.toString()}&${sort}`;

        try {
            const response = await extra.api.get<EmployeesData>(requestUrl);

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
