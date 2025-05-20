import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployeeEducations } from '../services/fetchEmployeeEducations/fetchEmployeeEducations';
import { EmployeeEducationsSchema, EmployeeEducationsData } from '../types/employeeEducations';

const initialState: EmployeeEducationsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const employeeEducationsSlice = createSlice({
    name: 'employeeEducations',
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
            .addCase(fetchEmployeeEducations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeEducations.fulfilled, (state, action: PayloadAction<EmployeeEducationsData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchEmployeeEducations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeeEducationsActions } = employeeEducationsSlice;
export const { reducer: employeeEducationsReducer } = employeeEducationsSlice;
