import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurriculumSubjectsSchema, CurriculumSubjectsType } from '../types/curriculumSubjects';
import { fetchCurriculumSubjects } from '../services/fetchCurriculumSubjects/fetchCurriculumSubjects';

const initialState: CurriculumSubjectsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const curriculumSubjectsSlice = createSlice({
    name: 'curriculumSubjects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurriculumSubjects.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCurriculumSubjects.fulfilled, (state, action: PayloadAction<CurriculumSubjectsType[]>) => {
                state.isLoading = false;
                state.data = action.payload.sort((a, b) => a.sort - b.sort);
            })
            .addCase(fetchCurriculumSubjects.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: curriculumSubjectsActions } = curriculumSubjectsSlice;
export const { reducer: curriculumSubjectsReducer } = curriculumSubjectsSlice;
