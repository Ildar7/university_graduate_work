import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEmployeePositionDetail,
} from '../services/fetchEmployeePositionDetail/fetchEmployeePositionDetail';
import {
    EmployeePositionDetailSchema,
    EmployeePositionDetailType,
} from '../types/employeePositionDetail';

const initialState: EmployeePositionDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const employeePositionDetailSlice = createSlice({
    name: 'employeePositionDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeePositionDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeePositionDetail.fulfilled, (state, action: PayloadAction<EmployeePositionDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmployeePositionDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeePositionDetailActions } = employeePositionDetailSlice;
export const { reducer: employeePositionDetailReducer } = employeePositionDetailSlice;
