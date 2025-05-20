import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEmployeeCategoryDetail,
} from 'entities/EmployeeCategoryDetail/model/services/fetchEmployeeCategoryDetail/fetchEmployeeCategoryDetail';
import {
    EmployeeCategoryDetailSchema,
    EmployeeCategoryDetailType,
} from '../types/employeeCategoryDetail';

const initialState: EmployeeCategoryDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const employeeCategoryDetailSlice = createSlice({
    name: 'employeeCategoryDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeCategoryDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeCategoryDetail.fulfilled, (state, action: PayloadAction<EmployeeCategoryDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmployeeCategoryDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeeCategoryDetailActions } = employeeCategoryDetailSlice;
export const { reducer: employeeCategoryDetailReducer } = employeeCategoryDetailSlice;
