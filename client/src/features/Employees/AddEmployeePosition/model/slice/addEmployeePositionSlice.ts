import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addEmployeePosition,
} from '../services/addEmployeePosition/addEmployeePosition';
import { AddEmployeePositionSchema } from '../types/addEmployeePosition';

const initialState: AddEmployeePositionSchema = {
    data: {
        position_ids: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEmployeePositionSlice = createSlice({
    name: 'addEmployeePosition',
    initialState,
    reducers: {
        setPositionIds: (state, action: PayloadAction<number[]>) => {
            state.data.position_ids = action.payload;
        },
        clearData: (state) => {
            state.data = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEmployeePosition.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployeePosition.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEmployeePosition.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeePositionActions } = addEmployeePositionSlice;
export const { reducer: addEmployeePositionReducer } = addEmployeePositionSlice;
