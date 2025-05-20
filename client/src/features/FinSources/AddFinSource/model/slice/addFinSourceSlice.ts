import { createSlice } from '@reduxjs/toolkit';
import { AddFinSourceSchema } from '../types/addFinSource';
import {
    addFinSource,
} from '../services/addFinSource/addFinSource';

const initialState: AddFinSourceSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addFinSourceSlice = createSlice({
    name: 'addFinSource',
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
            .addCase(addFinSource.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addFinSource.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addFinSource.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addFinSourceActions } = addFinSourceSlice;
export const { reducer: addFinSourceReducer } = addFinSourceSlice;
