import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { ArrivalSourcesData, ArrivalSourcesError } from 'entities/ArrivalSources';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getStudentClubsLimit, getStudentClubsPage } from 'entities/StudentClubs';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getArrivalSourcesPage,
} from '../../selectors/getArrivalSourcesPage/getArrivalSourcesPage';
import {
    getArrivalSourcesLimit,
} from '../../selectors/getArrivalSourcesLimit/getArrivalSourcesLimit';

export const fetchArrivalSources = createAsyncThunk<ArrivalSourcesData, void, ThunkConfig<ArrivalSourcesError>>(
    'students/fetchArrivalSources',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getArrivalSourcesPage,
            limitSelector: getArrivalSourcesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/student-arrival-sources', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<ArrivalSourcesData>(requestUrl);

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
