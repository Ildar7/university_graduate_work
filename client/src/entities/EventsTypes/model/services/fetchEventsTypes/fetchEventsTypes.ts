import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { EventsTypesData, EventsTypesError } from 'entities/EventsTypes';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getArrivalSourcesLimit, getArrivalSourcesPage } from 'entities/ArrivalSources';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getEventsTypesPage,
} from '../../selectors/getEventsTypesPage/getEventsTypesPage';
import {
    getEventsTypesLimit,
} from '../../selectors/getEventsTypesLimit/getEventsTypesLimit';

export const fetchEventsTypes = createAsyncThunk<EventsTypesData, void, ThunkConfig<EventsTypesError>>(
    'students/fetchEventsTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEventsTypesPage,
            limitSelector: getEventsTypesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/events/types', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EventsTypesData>(requestUrl);

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
