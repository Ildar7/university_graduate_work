import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getEmployeeEducationsPage,
} from '../../selectors/getEmployeeEducationsPage/getEmployeeEducationsPage';
import {
    getEmployeeEducationsLimit,
} from '../../selectors/getEmployeeEducationsLimit/getEmployeeEducationsLimit';
import {
    EmployeeEducationsData,
    EmployeeEducationsError,
} from '../../types/employeeEducations';

export const fetchEmployeeEducations = createAsyncThunk<EmployeeEducationsData, void, ThunkConfig<EmployeeEducationsError>>(
    'employees/fetchEmployeeEducations',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEmployeeEducationsPage,
            limitSelector: getEmployeeEducationsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/human-resources/educations/', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EmployeeEducationsData>(requestUrl);

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
