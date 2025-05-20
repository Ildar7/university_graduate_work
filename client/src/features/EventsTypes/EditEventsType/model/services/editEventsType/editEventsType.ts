import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEventsTypes } from 'entities/EventsTypes';
import {
    fetchEventsTypeDetail,
} from 'entities/EventsTypeDetail/model/services/fetchEventsTypeDetail/fetchEventsTypeDetail';
import { EditEventsTypeErrors } from '../../types/editEventsType';
import {
    getEditEventsTypeNewFieldsData,
} from '../../selectors/getEditEventsTypeNewFieldsData/getEditEventsTypeNewFieldsData';

export const editEventsType = createAsyncThunk<void, string, ThunkConfig<EditEventsTypeErrors>>(
    'eventsTypes/editEventsType',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const eventsTypeNewData = getEditEventsTypeNewFieldsData(getState() as any);

        const data = {
            name: eventsTypeNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/events/types/${id}`, data);

            dispatch(fetchEventsTypes());
            dispatch(fetchEventsTypeDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
