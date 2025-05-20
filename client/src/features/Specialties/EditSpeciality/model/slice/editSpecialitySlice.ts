import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditSpecialitySchema } from 'features/Specialties/EditSpeciality';
import { SpecialityDetailType } from 'entities/SpecialityDetail';
import {
    editSpeciality,
} from '../services/editSpeciality/editSpeciality';

const initialState: EditSpecialitySchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editSpecialitySlice = createSlice({
    name: 'editSpeciality',
    initialState,
    reducers: {
        setSpecialityData: (state, action: PayloadAction<SpecialityDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.speciality,
                    code: state.data.shifr_spec,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        setCode: (state, action: PayloadAction<string>) => {
            state.newFields!.code = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.speciality || null,
                code: state.data?.shifr_spec || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editSpeciality.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editSpeciality.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editSpeciality.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editSpecialityActions } = editSpecialitySlice;
export const { reducer: editSpecialityReducer } = editSpecialitySlice;
