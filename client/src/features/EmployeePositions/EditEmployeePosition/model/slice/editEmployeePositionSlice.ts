import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    editEmployeePosition,
} from '../services/editEmployeePosition/editEmployeePosition';
import { EditEmployeePositionType, EditEmployeePositionSchema } from '../types/editEmployeePosition';

const initialState: EditEmployeePositionSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEmployeePositionSlice = createSlice({
    name: 'editEmployeePosition',
    initialState,
    reducers: {
        setEmployeePositionData: (state, action: PayloadAction<EditEmployeePositionType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = action.payload;
            }
        },
        setInputData: (state, action) => {
            const [name, value] = action.payload;
            if (!value) {
                state.newFields = {
                    ...state.newFields,
                    [name]: null,
                };
            } else {
                state.newFields = {
                    ...state.newFields,
                    [name]: value,
                };
            }
        },
        clearNewFields: (state) => {
            state.newFields = state.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEmployeePosition.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEmployeePosition.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEmployeePosition.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEmployeePositionActions } = editEmployeePositionSlice;
export const { reducer: editEmployeePositionReducer } = editEmployeePositionSlice;
