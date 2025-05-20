import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { QualificationsData, QualificationsError } from 'entities/Qualifications/model/types/qualifications';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getQualificationsPage } from '../../selectors/getQualificationsPage/getQualificationsPage';
import { getQualificationsLimit } from '../../selectors/getQualificationsLimit/getQualificationsLimit';

export const fetchQualifications = createAsyncThunk<QualificationsData, void, ThunkConfig<QualificationsError>>(
    'students/fetchQualifications',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getQualificationsPage,
            limitSelector: getQualificationsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/qualifications', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<QualificationsData>(requestUrl);

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
