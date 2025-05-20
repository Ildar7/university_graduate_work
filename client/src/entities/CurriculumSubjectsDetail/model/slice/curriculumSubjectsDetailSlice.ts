import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurriculumSubjectsDetailSchema, CurriculumSubjectsDetailType } from '../types/curriculumSubjectsDetail';
import { fetchCurriculumSubjectsDetail } from '../services/fetchCurriculumSubjectsDetail/fetchCurriculumSubjectsDetail';

const initialState: CurriculumSubjectsDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const curriculumSubjectsDetailSlice = createSlice({
    name: 'curriculumSubjectsDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurriculumSubjectsDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCurriculumSubjectsDetail.fulfilled, (state, action: PayloadAction<CurriculumSubjectsDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCurriculumSubjectsDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: curriculumSubjectsDetailActions } = curriculumSubjectsDetailSlice;
export const { reducer: curriculumSubjectsDetailReducer } = curriculumSubjectsDetailSlice;
