import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditStudentClubSchema } from 'features/StudentClubs/EditStudentClub';
import { StudentClubDetailType } from 'entities/StudentClubDetail';
import {
    editStudentClub,
} from '../services/editStudentClub/editStudentClub';

const initialState: EditStudentClubSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editStudentClubSlice = createSlice({
    name: 'editStudentClub',
    initialState,
    reducers: {
        setStudentClubData: (state, action: PayloadAction<StudentClubDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.clubs,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.clubs || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editStudentClub.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editStudentClub.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editStudentClub.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editStudentClubActions } = editStudentClubSlice;
export const { reducer: editStudentClubReducer } = editStudentClubSlice;
