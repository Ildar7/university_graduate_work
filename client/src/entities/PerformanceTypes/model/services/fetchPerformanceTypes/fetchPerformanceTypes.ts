import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { PerformanceTypesData, PerformanceTypesError } from 'entities/PerformanceTypes';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getFinishedEduTypesLimit, getFinishedEduTypesPage } from 'entities/FinishedEduTypes';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getPerformanceTypesPage,
} from '../../selectors/getPerformanceTypesPage/getPerformanceTypesPage';
import {
    getPerformanceTypesLimit,
} from '../../selectors/getPerformanceTypesLimit/getPerformanceTypesLimit';

export const fetchPerformanceTypes = createAsyncThunk<PerformanceTypesData, void, ThunkConfig<PerformanceTypesError>>(
    'students/fetchPerformanceTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getPerformanceTypesPage,
            limitSelector: getPerformanceTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/student-performance-types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<PerformanceTypesData>(requestUrl);

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
