import { createSlice } from '@reduxjs/toolkit';
import { AddEduFormSchema } from '../types/addEduForm';
import {
    addEduForm,
} from '../services/addEduForm/addEduForm';

const initialState: AddEduFormSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEduFormSlice = createSlice({
    name: 'addEduForm',
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
            .addCase(addEduForm.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEduForm.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEduForm.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEduFormActions } = addEduFormSlice;
export const { reducer: addEduFormReducer } = addEduFormSlice;
