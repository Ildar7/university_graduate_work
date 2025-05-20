import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEduFormDetail,
} from '../services/fetchEduFormDetail/fetchEduFormDetail';
import {
    EduFormDetailSchema,
    EduFormDetailType,
} from '../types/eduFormDetail';

const initialState: EduFormDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const eduFormDetailSlice = createSlice({
    name: 'eduFormDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEduFormDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEduFormDetail.fulfilled, (state, action: PayloadAction<EduFormDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEduFormDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eduFormDetailActions } = eduFormDetailSlice;
export const { reducer: eduFormDetailReducer } = eduFormDetailSlice;
