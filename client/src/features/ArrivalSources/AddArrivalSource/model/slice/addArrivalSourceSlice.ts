import { createSlice } from '@reduxjs/toolkit';
import { AddArrivalSourceSchema } from '../types/addArrivalSource';
import {
    addArrivalSource,
} from '../services/addArrivalSource/addArrivalSource';

const initialState: AddArrivalSourceSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addArrivalSourceSlice = createSlice({
    name: 'addArrivalSource',
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
            .addCase(addArrivalSource.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addArrivalSource.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addArrivalSource.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addArrivalSourceActions } = addArrivalSourceSlice;
export const { reducer: addArrivalSourceReducer } = addArrivalSourceSlice;
