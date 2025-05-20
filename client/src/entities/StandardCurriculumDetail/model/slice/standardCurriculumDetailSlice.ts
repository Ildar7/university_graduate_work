import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchStandardCurriculumDetail,
} from '../services/fetchStandardCurriculumDetail/fetchStandardCurriculumDetail';
import {
    StandardCurriculumDetailSchema,
    StandardCurriculumDetailType,
} from '../types/standardCurriculumDetail';

const initialState: StandardCurriculumDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const standardCurriculumDetailSlice = createSlice({
    name: 'standardCurriculumDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStandardCurriculumDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStandardCurriculumDetail.fulfilled, (state, action: PayloadAction<StandardCurriculumDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStandardCurriculumDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: standardCurriculumDetailActions } = standardCurriculumDetailSlice;
export const { reducer: standardCurriculumDetailReducer } = standardCurriculumDetailSlice;
