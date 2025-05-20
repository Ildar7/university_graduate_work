import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditArrivalSourceSchema } from 'features/ArrivalSources/EditArrivalSource';
import { ArrivalSourceDetailType } from 'entities/ArrivalSourceDetail';
import {
    editArrivalSource,
} from '../services/editArrivalSource/editArrivalSource';

const initialState: EditArrivalSourceSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editArrivalSourceSlice = createSlice({
    name: 'editArrivalSource',
    initialState,
    reducers: {
        setArrivalSourceData: (state, action: PayloadAction<ArrivalSourceDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.comesfrom,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.comesfrom || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editArrivalSource.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editArrivalSource.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editArrivalSource.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editArrivalSourceActions } = editArrivalSourceSlice;
export const { reducer: editArrivalSourceReducer } = editArrivalSourceSlice;
