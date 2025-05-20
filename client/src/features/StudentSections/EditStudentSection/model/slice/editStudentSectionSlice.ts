import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditStudentSectionSchema } from 'features/StudentSections/EditStudentSection';
import { StudentSectionDetailType } from 'entities/StudentSectionDetail';
import {
    editStudentSection,
} from '../services/editStudentSection/editStudentSection';

const initialState: EditStudentSectionSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editStudentSectionSlice = createSlice({
    name: 'editStudentSection',
    initialState,
    reducers: {
        setStudentSectionData: (state, action: PayloadAction<StudentSectionDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.sections,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.sections || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editStudentSection.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editStudentSection.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editStudentSection.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editStudentSectionActions } = editStudentSectionSlice;
export const { reducer: editStudentSectionReducer } = editStudentSectionSlice;
