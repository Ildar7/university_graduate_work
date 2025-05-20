import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExportStudentsSchema, ExportStudentsResponse } from '../types/exportStudents';
import { exportStudents } from '../services/exportStudents/exportStudents';

const initialState: ExportStudentsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const exportStudentsSlice = createSlice({
    name: 'exportStudents',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exportStudents.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(exportStudents.fulfilled, (state, action: PayloadAction<ExportStudentsResponse>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(exportStudents.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: exportStudentsActions } = exportStudentsSlice;
export const { reducer: exportStudentsReducer } = exportStudentsSlice;
