import { createSlice } from '@reduxjs/toolkit';
import { addNewEmployee } from 'features/Employees/AddEmployee/model/services/addNewEmployee/addNewEmployee';
import { addEmployeeInitial } from '../../const/addEmployeeInitial';
import { AddEmployeeSchema } from '../types/addEmployee';

const initialState: AddEmployeeSchema = {
    data: addEmployeeInitial,
    isLoading: false,
    errors: undefined,
};

const addEmployeeSlice = createSlice({
    name: 'addEmployee',
    initialState,
    reducers: {
        setInputData: (state, action) => {
            const [name, value] = action.payload;

            if (!value && typeof value !== 'boolean') {
                state.data = {
                    ...state.data,
                    [name]: null,
                };
            } else {
                state.data = {
                    ...state.data,
                    [name]: value,
                };
            }
        },
        clearData: (state) => {
            state.data = addEmployeeInitial;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewEmployee.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addNewEmployee.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addNewEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeeActions } = addEmployeeSlice;
export const { reducer: addEmployeeReducer } = addEmployeeSlice;
