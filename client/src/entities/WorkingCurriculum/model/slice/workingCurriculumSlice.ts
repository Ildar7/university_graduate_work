import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkingCurriculumData, WorkingCurriculumSchema, WorkingCurriculumType } from '../types/workingCurriculum';
import {
    fetchWorkingCurriculum,
} from '../services/fetchWorkingCurriculum/fetchWorkingCurriculum';

const initialState: WorkingCurriculumSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const workingCurriculumSlice = createSlice({
    name: 'workingCurriculum',
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
            .addCase(fetchWorkingCurriculum.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculum.fulfilled, (state, action: PayloadAction<WorkingCurriculumData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchWorkingCurriculum.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: workingCurriculumActions } = workingCurriculumSlice;
export const { reducer: workingCurriculumReducer } = workingCurriculumSlice;
