import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addStudentGroup } from '../services/addStudentGroup/addStudentGroup';
import { AddStudentGroupSchema } from '../types/addStudentGroups';

const initialState: AddStudentGroupSchema = {
    data: {
        code: null,
        short_name: null,
        course: null,
        enrollment_year: null,
        name: null,
        id_specialty: null,
        is_full_time: null,
        qualifications: null,
        serial_number: null,
        study_duration: null,
    },
    isLoading: false,
    errors: undefined,
};

const addStudentGroupsSlice = createSlice({
    name: 'addStudentGroups',
    initialState,
    reducers: {
        setInputData: (state, action) => {
            if (!action.payload[1]) {
                state.data = {
                    ...state.data,
                    [action.payload[0]]: null,
                };
            } else {
                state.data = {
                    ...state.data,
                    [action.payload[0]]: action.payload[1],
                };
            }
        },
        changeFullTimeEducation: (state, action: PayloadAction<boolean>) => {
            state.data.is_full_time = action.payload;
        },
        changeSpecialty: (state, action: PayloadAction<number | null>) => {
            state.data.id_specialty = action.payload;
        },
        changeQualifications: (state, action: PayloadAction<number[] | null>) => {
            state.data.qualifications = action.payload;
        },
        changeSerialNumber: (state, action: PayloadAction<number | null>) => {
            state.data.serial_number = action.payload;
        },
        clearData: (state) => {
            state.data = initialState.data;
            state.errors = undefined;
        },
        changeCode: (state, action: PayloadAction<string | null>) => {
            state.data.code = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addStudentGroup.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addStudentGroup.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addStudentGroup.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addStudentGroupsActions } = addStudentGroupsSlice;
export const { reducer: addStudentGroupsReducer } = addStudentGroupsSlice;
