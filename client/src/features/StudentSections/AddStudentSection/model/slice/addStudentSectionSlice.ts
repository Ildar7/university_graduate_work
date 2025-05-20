import { createSlice } from '@reduxjs/toolkit';
import { AddStudentSectionSchema } from '../types/addStudentSection';
import {
    addStudentSection,
} from '../services/addStudentSection/addStudentSection';

const initialState: AddStudentSectionSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addStudentSectionSlice = createSlice({
    name: 'addStudentSection',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.data.title = action.payload;
        },
        clearData: (state) => {
            state.data = {
                title: null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addStudentSection.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addStudentSection.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addStudentSection.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addStudentSectionActions } = addStudentSectionSlice;
export const { reducer: addStudentSectionReducer } = addStudentSectionSlice;
