import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchPracticeTypeDetail,
} from '../services/fetchPracticeTypeDetail/fetchPracticeTypeDetail';
import {
    PracticeTypeDetailSchema,
    PracticeTypeDetailType,
} from '../types/practiceTypeDetail';

const initialState: PracticeTypeDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const practiceTypeDetailSlice = createSlice({
    name: 'practiceTypeDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPracticeTypeDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPracticeTypeDetail.fulfilled, (state, action: PayloadAction<PracticeTypeDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPracticeTypeDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: practiceTypeDetailActions } = practiceTypeDetailSlice;
export const { reducer: practiceTypeDetailReducer } = practiceTypeDetailSlice;
