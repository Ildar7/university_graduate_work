import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getEmployeePositionsPage,
} from '../../selectors/getEmployeePositionsPage/getEmployeePositionsPage';
import {
    getEmployeePositionsLimit,
} from '../../selectors/getEmployeePositionsLimit/getEmployeePositionsLimit';
import {
    EmployeePositionsData,
    EmployeePositionsError,
} from '../../types/employeePositions';

export const fetchEmployeePositions = createAsyncThunk<EmployeePositionsData, void, ThunkConfig<EmployeePositionsError>>(
    'employees/fetchEmployeePositions',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEmployeePositionsPage,
            limitSelector: getEmployeePositionsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/human-resources/positions/', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EmployeePositionsData>(requestUrl);

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
