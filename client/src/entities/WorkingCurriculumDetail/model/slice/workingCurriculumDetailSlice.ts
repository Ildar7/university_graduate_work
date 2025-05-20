import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkingCurriculumDetailSchema, WorkingCurriculumDetailType } from '../types/workingCurriculumDetail';
import { fetchWorkingCurriculumDetail } from '../services/fetchWorkingCurriculumDetail/fetchWorkingCurriculumDetail';

const initialState: WorkingCurriculumDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const workingCurriculumDetailSlice = createSlice({
    name: 'workingCurriculumDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkingCurriculumDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculumDetail.fulfilled, (state, action: PayloadAction<WorkingCurriculumDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchWorkingCurriculumDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: workingCurriculumDetailActions } = workingCurriculumDetailSlice;
export const { reducer: workingCurriculumDetailReducer } = workingCurriculumDetailSlice;
