import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { FinishedEduTypesData, FinishedEduTypesError } from 'entities/FinishedEduTypes/model/types/finishedEduTypes';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getFinishedEduTypesPage } from '../../selectors/getFinishedEduTypesPage/getFinishedEduTypesPage';
import { getFinishedEduTypesLimit } from '../../selectors/getFinishedEduTypesLimit/getFinishedEduTypesLimit';

export const fetchFinishedEduTypes = createAsyncThunk<FinishedEduTypesData, void, ThunkConfig<FinishedEduTypesError>>(
    'students/fetchFinishedEduTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getFinishedEduTypesPage,
            limitSelector: getFinishedEduTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/finished-education-types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<FinishedEduTypesData>(requestUrl);

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
