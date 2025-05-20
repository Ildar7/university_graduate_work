import { createSlice } from '@reduxjs/toolkit';
import {
    addEmployeeEducation,
} from '../services/addEmployeeEducation/addEmployeeEducation';
import { AddEmployeeEducationSchema } from '../types/addEmployeeEducation';

const initialState: AddEmployeeEducationSchema = {
    data: {
        name: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEmployeeEducationSlice = createSlice({
    name: 'addEmployeeEducation',
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
            .addCase(addEmployeeEducation.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployeeEducation.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEmployeeEducation.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeeEducationActions } = addEmployeeEducationSlice;
export const { reducer: addEmployeeEducationReducer } = addEmployeeEducationSlice;
