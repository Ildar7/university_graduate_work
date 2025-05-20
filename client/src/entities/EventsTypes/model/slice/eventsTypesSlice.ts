import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEventsTypes } from '../services/fetchEventsTypes/fetchEventsTypes';
import { EventsTypesData, EventsTypesSchema } from '../types/eventsTypes';

const initialState: EventsTypesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const eventsTypesSlice = createSlice({
    name: 'eventsTypes',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<string>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventsTypes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEventsTypes.fulfilled, (state, action: PayloadAction<EventsTypesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchEventsTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eventsTypesActions } = eventsTypesSlice;
export const { reducer: eventsTypesReducer } = eventsTypesSlice;
