import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    addEmployeeSubject,
} from '../services/addEmployeeSubject/addEmployeeSubject';
import { AddEmployeeSubjectSchema } from '../types/addEmployeeSubject';

const initialState: AddEmployeeSubjectSchema = {
    data: {
        subject_id: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEmployeeSubjectSlice = createSlice({
    name: 'addEmployeeSubject',
    initialState,
    reducers: {
        setSubjectId: (state, action: PayloadAction<number>) => {
            state.data.subject_id = action.payload;
        },
        clearData: (state) => {
            state.data = initialState.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEmployeeSubject.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployeeSubject.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEmployeeSubject.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeeSubjectActions } = addEmployeeSubjectSlice;
export const { reducer: addEmployeeSubjectReducer } = addEmployeeSubjectSlice;
