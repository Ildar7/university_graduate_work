import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditFinSourceSchema } from 'features/FinSources/EditFinSource';
import { FinSourceDetailType } from 'entities/FinSourceDetail';
import {
    editFinSource,
} from '../services/editFinSource/editFinSource';

const initialState: EditFinSourceSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editFinSourceSlice = createSlice({
    name: 'editFinSource',
    initialState,
    reducers: {
        setFinSourceData: (state, action: PayloadAction<FinSourceDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.whopaying,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.whopaying || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editFinSource.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editFinSource.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editFinSource.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editFinSourceActions } = editFinSourceSlice;
export const { reducer: editFinSourceReducer } = editFinSourceSlice;
