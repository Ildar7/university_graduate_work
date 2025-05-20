import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEventsTypeDetail,
} from '../services/fetchEventsTypeDetail/fetchEventsTypeDetail';
import {
    EventsTypeDetailSchema,
    EventsTypeDetailType,
} from '../types/eventsTypeDetail';

const initialState: EventsTypeDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const eventsTypeDetailSlice = createSlice({
    name: 'eventsTypeDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventsTypeDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEventsTypeDetail.fulfilled, (state, action: PayloadAction<EventsTypeDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEventsTypeDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eventsTypeDetailActions } = eventsTypeDetailSlice;
export const { reducer: eventsTypeDetailReducer } = eventsTypeDetailSlice;
