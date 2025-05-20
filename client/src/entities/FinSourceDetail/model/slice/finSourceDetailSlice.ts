import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchFinSourceDetail,
} from '../services/fetchFinSourceDetail/fetchFinSourceDetail';
import {
    FinSourceDetailSchema,
    FinSourceDetailType,
} from '../types/finSourceDetail';

const initialState: FinSourceDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const finSourceDetailSlice = createSlice({
    name: 'finSourceDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFinSourceDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFinSourceDetail.fulfilled, (state, action: PayloadAction<FinSourceDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFinSourceDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: finSourceDetailActions } = finSourceDetailSlice;
export const { reducer: finSourceDetailReducer } = finSourceDetailSlice;
