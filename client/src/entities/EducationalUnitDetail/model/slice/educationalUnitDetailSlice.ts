import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEducationalUnitDetail,
} from '../services/fetchEducationalUnitDetail/fetchEducationalUnitDetail';
import {
    EducationalUnitDetailSchema,
    EducationalUnitDetailData,
} from '../types/educationalUnitDetail';

const initialState: EducationalUnitDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const educationalUnitDetailSlice = createSlice({
    name: 'educationalUnitDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducationalUnitDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEducationalUnitDetail.fulfilled, (state, action: PayloadAction<EducationalUnitDetailData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEducationalUnitDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: educationalUnitDetailActions } = educationalUnitDetailSlice;
export const { reducer: educationalUnitDetailReducer } = educationalUnitDetailSlice;
