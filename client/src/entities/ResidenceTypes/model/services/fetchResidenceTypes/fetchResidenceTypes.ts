import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { ResidenceTypesData, ResidenceTypesError } from 'entities/ResidenceTypes';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getResidenceTypesPage,
} from '../../selectors/getResidenceTypesPage/getResidenceTypesPage';
import {
    getResidenceTypesLimit,
} from '../../selectors/getResidenceTypesLimit/getResidenceTypesLimit';

export const fetchResidenceTypes = createAsyncThunk<ResidenceTypesData, void, ThunkConfig<ResidenceTypesError>>(
    'students/fetchResidenceTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getResidenceTypesPage,
            limitSelector: getResidenceTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/residence-types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<ResidenceTypesData>(requestUrl);

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
