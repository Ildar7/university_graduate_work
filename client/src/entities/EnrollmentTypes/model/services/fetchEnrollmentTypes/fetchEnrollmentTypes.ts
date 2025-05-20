import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { EnrollmentTypesData, EnrollmentTypesError } from 'entities/EnrollmentTypes';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getCitizenshipLimit, getCitizenshipPage } from 'entities/Citizenship';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getEnrollmentTypesPage,
} from '../../selectors/getEnrollmentTypesPage/getEnrollmentTypesPage';
import {
    getEnrollmentTypesLimit,
} from '../../selectors/getEnrollmentTypesLimit/getEnrollmentTypesLimit';

export const fetchEnrollmentTypes = createAsyncThunk<EnrollmentTypesData, void, ThunkConfig<EnrollmentTypesError>>(
    'students/fetchEnrollmentTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEnrollmentTypesPage,
            limitSelector: getEnrollmentTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/enrollment-types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EnrollmentTypesData>(requestUrl);

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
