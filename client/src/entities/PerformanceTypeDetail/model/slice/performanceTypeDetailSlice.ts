import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchPerformanceTypeDetail,
} from '../services/fetchPerformanceTypeDetail/fetchPerformanceTypeDetail';
import {
    PerformanceTypeDetailSchema,
    PerformanceTypeDetailType,
} from '../types/performanceTypeDetail';

const initialState: PerformanceTypeDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const performanceTypeDetailSlice = createSlice({
    name: 'performanceTypeDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerformanceTypeDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPerformanceTypeDetail.fulfilled, (state, action: PayloadAction<PerformanceTypeDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPerformanceTypeDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: performanceTypeDetailActions } = performanceTypeDetailSlice;
export const { reducer: performanceTypeDetailReducer } = performanceTypeDetailSlice;
