import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddSpecialitySchema } from '../types/addSpeciality';
import {
    addSpeciality,
} from '../services/addSpeciality/addSpeciality';

const initialState: AddSpecialitySchema = {
    data: {
        title: null,
        code: null,
    },
    isLoading: false,
    errors: undefined,
};

const addSpecialitySlice = createSlice({
    name: 'addSpeciality',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload;
        },
        setCode: (state, action: PayloadAction<string>) => {
            state.data.code = action.payload;
        },
        clearData: (state) => {
            state.data = {
                title: null,
                code: null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addSpeciality.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addSpeciality.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addSpeciality.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addSpecialityActions } = addSpecialitySlice;
export const { reducer: addSpecialityReducer } = addSpecialitySlice;
