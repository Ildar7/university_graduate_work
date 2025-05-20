import { createSlice } from '@reduxjs/toolkit';
import { AddEventsTypeSchema } from '../types/addEventsType';
import {
    addEventsType,
} from '../services/addEventsType/addEventsType';

const initialState: AddEventsTypeSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEventsTypeSlice = createSlice({
    name: 'addEventsType',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.data.title = action.payload;
        },
        clearData: (state) => {
            state.data = {
                title: null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEventsType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEventsType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEventsType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEventsTypeActions } = addEventsTypeSlice;
export const { reducer: addEventsTypeReducer } = addEventsTypeSlice;
