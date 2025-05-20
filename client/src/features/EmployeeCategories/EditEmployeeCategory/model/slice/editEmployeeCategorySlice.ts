import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    editEmployeeCategory,
} from 'features/EmployeeCategories/EditEmployeeCategory/model/services/editEmployeeCategory/editEmployeeCategory';
import { EditEmployeeCategoryType, EditEmployeeCategorySchema } from '../types/editEmployeeCategory';

const initialState: EditEmployeeCategorySchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEmployeeCategorySlice = createSlice({
    name: 'editEmployeeCategory',
    initialState,
    reducers: {
        setEmployeeCategoryData: (state, action: PayloadAction<EditEmployeeCategoryType | undefined>) => {
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
            .addCase(editEmployeeCategory.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEmployeeCategory.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEmployeeCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEmployeeCategoryActions } = editEmployeeCategorySlice;
export const { reducer: editEmployeeCategoryReducer } = editEmployeeCategorySlice;
