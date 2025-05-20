import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchResidenceTypeDetail,
} from '../services/fetchResidenceTypeDetail/fetchResidenceTypeDetail';
import {
    ResidenceTypeDetailSchema,
    ResidenceTypeDetailType,
} from '../types/residenceTypeDetail';

const initialState: ResidenceTypeDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const residenceTypeDetailSlice = createSlice({
    name: 'residenceTypeDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchResidenceTypeDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchResidenceTypeDetail.fulfilled, (state, action: PayloadAction<ResidenceTypeDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchResidenceTypeDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: residenceTypeDetailActions } = residenceTypeDetailSlice;
export const { reducer: residenceTypeDetailReducer } = residenceTypeDetailSlice;
