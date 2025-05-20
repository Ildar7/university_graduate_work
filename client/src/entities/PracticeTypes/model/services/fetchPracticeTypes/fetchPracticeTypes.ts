import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { PracticeTypesData, PracticeTypesError } from 'entities/PracticeTypes';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getPracticeTypesPage } from '../../selectors/getPracticeTypesPage/getPracticeTypesPage';
import { getPracticeTypesLimit } from '../../selectors/getPracticeTypesLimit/getPracticeTypesLimit';

export const fetchPracticeTypes = createAsyncThunk<PracticeTypesData, void, ThunkConfig<PracticeTypesError>>(
    'students/fetchPracticeTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getPracticeTypesPage,
            limitSelector: getPracticeTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/practice-types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<PracticeTypesData>(requestUrl);

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
