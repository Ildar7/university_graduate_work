import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployeeDetail } from '../services/fetchEmployeeDetail/fetchEmployeeDetail';
import { EmployeeDetailSchema, EmployeeDetailType } from '../types/employeeDetail';

const initialState: EmployeeDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const employeeDetailSlice = createSlice({
    name: 'employeeDetailSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeDetail.fulfilled, (state, action: PayloadAction<EmployeeDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmployeeDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeeDetailActions } = employeeDetailSlice;
export const { reducer: employeeDetailReducer } = employeeDetailSlice;
