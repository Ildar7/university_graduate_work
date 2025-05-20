import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEducationalModuleDetail,
} from '../services/fetchEducationalModuleDetail/fetchEducationalModuleDetail';
import {
    EducationalModuleDetailSchema,
    EducationalModuleDetailData,
} from '../types/educationalModuleDetail';

const initialState: EducationalModuleDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const educationalModuleDetailSlice = createSlice({
    name: 'educationalModuleDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducationalModuleDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEducationalModuleDetail.fulfilled, (state, action: PayloadAction<EducationalModuleDetailData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEducationalModuleDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: educationalModuleDetailActions } = educationalModuleDetailSlice;
export const { reducer: educationalModuleDetailReducer } = educationalModuleDetailSlice;
