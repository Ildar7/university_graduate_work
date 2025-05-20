import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EventsTypeDetailType } from 'entities/EventsTypeDetail/model/types/eventsTypeDetail';
import { editEventsTypeActions } from 'features/EventsTypes/EditEventsType';

export const fetchEventsTypeDetail = createAsyncThunk<EventsTypeDetailType, string, ThunkConfig<string>>(
    'eventsTypes/fetchEventsTypeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EventsTypeDetailType>(`/college/events/types/${id}`);

            dispatch(editEventsTypeActions.setEventsTypeData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
