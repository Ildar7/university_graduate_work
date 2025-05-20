import { createSlice } from '@reduxjs/toolkit';
import { AddStudentClubSchema } from '../types/addStudentClub';
import {
    addStudentClub,
} from '../services/addStudentClub/addStudentClub';

const initialState: AddStudentClubSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addStudentClubSlice = createSlice({
    name: 'addStudentClub',
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
            .addCase(addStudentClub.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addStudentClub.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addStudentClub.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addStudentClubActions } = addStudentClubSlice;
export const { reducer: addStudentClubReducer } = addStudentClubSlice;
