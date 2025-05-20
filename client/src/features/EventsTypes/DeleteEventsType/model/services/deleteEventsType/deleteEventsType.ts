import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEventsTypes } from 'entities/EventsTypes';

export const deleteEventsType = createAsyncThunk<void, string, ThunkConfig<string>>(
    'eventsTypes/deleteEventsType',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/events/types/${id}`);

            dispatch(fetchEventsTypes());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
