import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditStudentGroupsType, EditStudentGroupsSchema } from '../types/editStudentGroups';
import {
    editStudentGroups,
} from '../services/editStudentGroups/editStudentGroups';

const initialState: EditStudentGroupsSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editStudentGroupsSlice = createSlice({
    name: 'editStudentGroups',
    initialState,
    reducers: {
        setStudentGroupData: (state, action: PayloadAction<EditStudentGroupsType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = action.payload;
            }
        },
        setInputData: (state, action) => {
            if (!action.payload[1]) {
                state.newFields = {
                    ...state.newFields,
                    [action.payload[0]]: null,
                };
            } else {
                state.newFields = {
                    ...state.newFields,
                    [action.payload[0]]: action.payload[1],
                };
            }
        },
        changeEducationBaseId: (state, action: PayloadAction<number | null>) => {
            state.newFields!.id_education_base = action.payload;
        },
        changeFullTimeEducation: (state, action: PayloadAction<boolean>) => {
            state.newFields!.is_full_time = action.payload;
        },
        changeSpecialty: (state, action: PayloadAction<number | null>) => {
            state.newFields!.id_specialty = action.payload;
        },
        changeQualifications: (state, action: PayloadAction<number[] | null>) => {
            state.newFields!.qualifications = action.payload;
        },
        changeSerialNumber: (state, action: PayloadAction<number | null>) => {
            state.newFields!.serial_number = action.payload;
        },
        changeLanguage: (state, action: PayloadAction<number | null>) => {
            state.newFields!.id_language = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = state.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editStudentGroups.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editStudentGroups.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editStudentGroups.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editStudentGroupsActions } = editStudentGroupsSlice;
export const { reducer: editStudentGroupsReducer } = editStudentGroupsSlice;
