import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditPracticeTypeSchema } from 'features/PracticeTypes/EditPracticeType';
import { PracticeTypeDetailType } from 'entities/PracticeTypeDetail';
import {
    editPracticeType,
} from '../services/editPracticeType/editPracticeType';

const initialState: EditPracticeTypeSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editPracticeTypeSlice = createSlice({
    name: 'editPracticeType',
    initialState,
    reducers: {
        setPracticeTypeData: (state, action: PayloadAction<PracticeTypeDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.practice,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.practice || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editPracticeType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editPracticeType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editPracticeType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editPracticeTypeActions } = editPracticeTypeSlice;
export const { reducer: editPracticeTypeReducer } = editPracticeTypeSlice;
