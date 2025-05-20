import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainingScheduleHeaderSchema, TrainingScheduleHeaderSchemaData } from '../types/trainingScheduleSchema';
import {
    fetchTrainingScheduleSchema,
} from '../services/fetchTrainingScheduleSchema/fetchTrainingScheduleSchema';

const initialState: TrainingScheduleHeaderSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const trainingScheduleSchemaSlice = createSlice({
    name: 'trainingScheduleSchema',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainingScheduleSchema.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTrainingScheduleSchema.fulfilled, (
                state,
                action: PayloadAction<TrainingScheduleHeaderSchemaData>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTrainingScheduleSchema.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: trainingScheduleSchemaActions } = trainingScheduleSchemaSlice;
export const { reducer: trainingScheduleSchemaReducer } = trainingScheduleSchemaSlice;
