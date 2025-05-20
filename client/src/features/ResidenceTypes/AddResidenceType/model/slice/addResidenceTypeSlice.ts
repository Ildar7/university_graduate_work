import { createSlice } from '@reduxjs/toolkit';
import { AddResidenceTypeSchema } from '../types/addResidenceType';
import {
    addResidenceType,
} from '../services/addResidenceType/addResidenceType';

const initialState: AddResidenceTypeSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addResidenceTypeSlice = createSlice({
    name: 'addResidenceType',
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
            .addCase(addResidenceType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addResidenceType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addResidenceType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addResidenceTypeActions } = addResidenceTypeSlice;
export const { reducer: addResidenceTypeReducer } = addResidenceTypeSlice;
