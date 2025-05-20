import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSubjectsSchedule } from '../services/fetchSubjectsSchedule/fetchSubjectsSchedule';
import { SubjectsScheduleSchema, SubjectsScheduleData } from '../types/subjectsSchedule';
import {
    fetchSubjectsScheduleAvailableYears,
} from '../services/fetchSubjectsScheduleAvailableYears/fetchSubjectsScheduleAvailableYears';

const initialState: SubjectsScheduleSchema = {
    list: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
    availableYears: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
};

const subjectsScheduleSlice = createSlice({
    name: 'subjectsSchedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjectsSchedule.pending, (state) => {
                state.list.error = undefined;
                state.list.isLoading = true;
            })
            .addCase(fetchSubjectsSchedule.fulfilled, (state, action: PayloadAction<SubjectsScheduleData[]>) => {
                state.list.isLoading = false;
                state.list.data = action.payload;
            })
            .addCase(fetchSubjectsSchedule.rejected, (state, action) => {
                state.list.isLoading = false;
                state.list.error = action.payload;
            })
            .addCase(fetchSubjectsScheduleAvailableYears.pending, (state) => {
                state.availableYears.error = undefined;
                state.availableYears.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleAvailableYears.fulfilled, (state, action: PayloadAction<number[]>) => {
                state.availableYears.isLoading = false;
                state.availableYears.data = action.payload;
            })
            .addCase(fetchSubjectsScheduleAvailableYears.rejected, (state, action) => {
                state.availableYears.isLoading = false;
                state.availableYears.error = action.payload;
            });
    },
});

export const { actions: subjectsScheduleActions } = subjectsScheduleSlice;
export const { reducer: subjectsScheduleReducer } = subjectsScheduleSlice;
