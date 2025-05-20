import { createSlice } from '@reduxjs/toolkit';
import {
    addEmployeePosition,
} from 'features/EmployeePositions/AddEmployeePosition/model/services/addEmployeePosition/addEmployeePosition';
import { AddEmployeePositionSchema } from '../types/addEmployeePosition';

const initialState: AddEmployeePositionSchema = {
    data: {
        name: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEmployeePositionSlice = createSlice({
    name: 'addEmployeePosition',
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
            .addCase(addEmployeePosition.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployeePosition.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEmployeePosition.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEmployeePositionActions } = addEmployeePositionSlice;
export const { reducer: addEmployeePositionReducer } = addEmployeePositionSlice;
