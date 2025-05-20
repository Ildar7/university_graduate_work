import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditEduFormSchema } from 'features/EduForms/EditEduForm';
import { EduFormDetailType } from 'entities/EduFormDetail';
import {
    editEduForm,
} from '../services/editEduForm/editEduForm';

const initialState: EditEduFormSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEduFormSlice = createSlice({
    name: 'editEduForm',
    initialState,
    reducers: {
        setEduFormData: (state, action: PayloadAction<EduFormDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.typeoftraining,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.typeoftraining || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEduForm.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEduForm.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEduForm.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEduFormActions } = editEduFormSlice;
export const { reducer: editEduFormReducer } = editEduFormSlice;
