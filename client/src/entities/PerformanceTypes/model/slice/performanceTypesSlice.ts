import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPerformanceTypes } from '../services/fetchPerformanceTypes/fetchPerformanceTypes';
import { PerformanceTypesData, PerformanceTypesSchema } from '../types/performanceTypes';

const initialState: PerformanceTypesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const performanceTypesSlice = createSlice({
    name: 'performanceTypes',
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
            .addCase(fetchPerformanceTypes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPerformanceTypes.fulfilled, (state, action: PayloadAction<PerformanceTypesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchPerformanceTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: performanceTypesActions } = performanceTypesSlice;
export const { reducer: performanceTypesReducer } = performanceTypesSlice;
