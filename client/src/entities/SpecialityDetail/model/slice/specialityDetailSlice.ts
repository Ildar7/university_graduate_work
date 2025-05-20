import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchSpecialityDetail,
} from '../services/fetchSpecialityDetail/fetchSpecialityDetail';
import {
    SpecialityDetailSchema,
    SpecialityDetailType,
} from '../types/specialityDetail';

const initialState: SpecialityDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const specialityDetailSlice = createSlice({
    name: 'specialityDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpecialityDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchSpecialityDetail.fulfilled, (state, action: PayloadAction<SpecialityDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchSpecialityDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: specialityDetailActions } = specialityDetailSlice;
export const { reducer: specialityDetailReducer } = specialityDetailSlice;
