import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from 'entities/Employees/model/services/fetchEmployees/fetchEmployees';
import { EmployeesData, EmployeesSchema } from '../types/employees';

const initialState: EmployeesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string | undefined>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<string | undefined>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<EmployeesData>) => {
                state.isLoading = false;
                state.data = {
                    ...action.payload,
                    data: action.payload.data.map((employee) => ({
                        ...employee,
                        fio: `${employee.last_name} ${employee.first_name} ${employee.middle_name || ''}`,
                    })),
                };
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: employeesActions } = employeesSlice;
export const { reducer: employeesReducer } = employeesSlice;
