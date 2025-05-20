import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeCategoriesSchema, EmployeeCategoriesData } from '../types/employeeCategories';
import { fetchEmployeeCategories } from '../services/fetchEmployeeCategories/fetchEmployeeCategories';

const initialState: EmployeeCategoriesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const employeeCategoriesSlice = createSlice({
    name: 'employeeCategories',
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
            .addCase(fetchEmployeeCategories.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeCategories.fulfilled, (state, action: PayloadAction<EmployeeCategoriesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchEmployeeCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeeCategoriesActions } = employeeCategoriesSlice;
export const { reducer: employeeCategoriesReducer } = employeeCategoriesSlice;
