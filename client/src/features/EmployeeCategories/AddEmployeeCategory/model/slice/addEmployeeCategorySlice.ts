import { createSlice } from '@reduxjs/toolkit';
import {
    addEmployeeCategory,
} from '../services/addEmployeeCategory/addEmployeeCategory';
import { AddEmployeeCategorySchema } from '../types/addEmployeeCategory';

const initialState: AddEmployeeCategorySchema = {
    data: {
        name: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEmployeeCategorySlice = createSlice({
    name: 'addEmployeeCategory',
    initialState,
    reducers: {
        setInputData: (state, action) => {
            const [name, value] = action.payload;
            if (!value) {
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
            state.data = initialState.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEmployeeCategory.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployeeCategory.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEmployeeCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeeCategoryActions } = addEmployeeCategorySlice;
export const { reducer: addEmployeeCategoryReducer } = addEmployeeCategorySlice;
