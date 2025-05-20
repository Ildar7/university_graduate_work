import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployeePositions } from '../services/fetchEmployeePositions/fetchEmployeePositions';
import { EmployeePositionsSchema, EmployeePositionsData } from '../types/employeePositions';

const initialState: EmployeePositionsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const employeePositionsSlice = createSlice({
    name: 'employeePositions',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<string>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeePositions.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeePositions.fulfilled, (state, action: PayloadAction<EmployeePositionsData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchEmployeePositions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeePositionsActions } = employeePositionsSlice;
export const { reducer: employeePositionsReducer } = employeePositionsSlice;
