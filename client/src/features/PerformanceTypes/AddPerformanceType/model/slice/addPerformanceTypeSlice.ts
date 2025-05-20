import { createSlice } from '@reduxjs/toolkit';
import { AddPerformanceTypeSchema } from '../types/addPerformanceType';
import {
    addPerformanceType,
} from '../services/addPerformanceType/addPerformanceType';

const initialState: AddPerformanceTypeSchema = {
    data: {
        title: null,
        value: null,
    },
    isLoading: false,
    errors: undefined,
};

const addPerformanceTypeSlice = createSlice({
    name: 'addPerformanceType',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.data.title = action.payload;
        },
        setValue: (state, action) => {
            state.data.value = +action.payload;
        },
        clearData: (state) => {
            state.data = {
                title: null,
                value: null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPerformanceType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addPerformanceType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addPerformanceType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addPerformanceTypeActions } = addPerformanceTypeSlice;
export const { reducer: addPerformanceTypeReducer } = addPerformanceTypeSlice;
