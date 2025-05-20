import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEmployeeEducationDetail,
} from '../services/fetchEmployeeEducationDetail/fetchEmployeeEducationDetail';
import {
    EmployeeEducationDetailSchema,
    EmployeeEducationDetailType,
} from '../types/employeeEducationDetail';

const initialState: EmployeeEducationDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const employeeEducationDetailSlice = createSlice({
    name: 'employeeEducationDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeEducationDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeEducationDetail.fulfilled, (state, action: PayloadAction<EmployeeEducationDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmployeeEducationDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeeEducationDetailActions } = employeeEducationDetailSlice;
export const { reducer: employeeEducationDetailReducer } = employeeEducationDetailSlice;
