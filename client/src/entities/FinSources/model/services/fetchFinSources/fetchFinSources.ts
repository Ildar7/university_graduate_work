import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { FinSourcesData, FinSourcesError } from 'entities/FinSources';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getFinSourcesPage,
} from '../../selectors/getFinSourcesPage/getFinSourcesPage';
import {
    getFinSourcesLimit,
} from '../../selectors/getFinSourcesLimit/getFinSourcesLimit';

export const fetchFinSources = createAsyncThunk<FinSourcesData, void, ThunkConfig<FinSourcesError>>(
    'students/fetchFinSources',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getFinSourcesPage,
            limitSelector: getFinSourcesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/financing-sources', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<FinSourcesData>(requestUrl);

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
