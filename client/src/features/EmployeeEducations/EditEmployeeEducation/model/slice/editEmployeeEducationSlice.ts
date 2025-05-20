import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    editEmployeeEducation,
} from '../services/editEmployeeEducation/editEmployeeEducation';
import { EditEmployeeEducationType, EditEmployeeEducationSchema } from '../types/editEmployeeEducation';

const initialState: EditEmployeeEducationSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEmployeeEducationSlice = createSlice({
    name: 'editEmployeeEducation',
    initialState,
    reducers: {
        setEmployeeEducationData: (state, action: PayloadAction<EditEmployeeEducationType | undefined>) => {
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
            .addCase(editEmployeeEducation.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEmployeeEducation.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEmployeeEducation.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEmployeeEducationActions } = editEmployeeEducationSlice;
export const { reducer: editEmployeeEducationReducer } = editEmployeeEducationSlice;
