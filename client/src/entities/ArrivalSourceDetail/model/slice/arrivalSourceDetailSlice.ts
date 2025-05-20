import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchArrivalSourceDetail,
} from '../services/fetchArrivalSourceDetail/fetchArrivalSourceDetail';
import {
    ArrivalSourceDetailSchema,
    ArrivalSourceDetailType,
} from '../types/arrivalSourceDetail';

const initialState: ArrivalSourceDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const arrivalSourceDetailSlice = createSlice({
    name: 'arrivalSourceDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArrivalSourceDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArrivalSourceDetail.fulfilled, (state, action: PayloadAction<ArrivalSourceDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArrivalSourceDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: arrivalSourceDetailActions } = arrivalSourceDetailSlice;
export const { reducer: arrivalSourceDetailReducer } = arrivalSourceDetailSlice;
