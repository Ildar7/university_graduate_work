import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainingScheduleSchema, TrainingScheduleType } from '../types/trainingSchedule';
import { fetchTrainingSchedule } from '../services/fetchTrainingSchedule/fetchTrainingSchedule';

const initialState: TrainingScheduleSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};

const trainingScheduleSlice = createSlice({
    name: 'trainingSchedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainingSchedule.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTrainingSchedule.fulfilled, (state, action: PayloadAction<TrainingScheduleType[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTrainingSchedule.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: trainingScheduleActions } = trainingScheduleSlice;
export const { reducer: trainingScheduleReducer } = trainingScheduleSlice;
