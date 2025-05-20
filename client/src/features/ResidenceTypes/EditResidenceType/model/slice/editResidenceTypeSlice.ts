import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditResidenceTypeSchema } from 'features/ResidenceTypes/EditResidenceType';
import { ResidenceTypeDetailType } from 'entities/ResidenceTypeDetail';
import {
    editResidenceType,
} from '../services/editResidenceType/editResidenceType';

const initialState: EditResidenceTypeSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editResidenceTypeSlice = createSlice({
    name: 'editResidenceType',
    initialState,
    reducers: {
        setResidenceTypeData: (state, action: PayloadAction<ResidenceTypeDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.typeofareaofresidence,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.typeofareaofresidence || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editResidenceType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editResidenceType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editResidenceType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editResidenceTypeActions } = editResidenceTypeSlice;
export const { reducer: editResidenceTypeReducer } = editResidenceTypeSlice;
