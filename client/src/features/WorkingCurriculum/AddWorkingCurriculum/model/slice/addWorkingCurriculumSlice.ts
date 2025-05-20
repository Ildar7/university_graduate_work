import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewWorkingCurriculum } from '../services/addNewWorkingCurriculum/addNewWorkingCurriculum';
import { AddWorkingCurriculumSchema } from '../types/addWorkingCurriculum';

const initialState: AddWorkingCurriculumSchema = {
    data: {
        academic_year_from: null,
        approval_date: null,
        is_active: false,
        is_full_time_education: null,
        education_base_id: null,
        standard_curriculum_id: null,
        title: null,
        version: 1,
    },
    isLoading: false,
    errors: undefined,
};

const addWorkingCurriculumSlice = createSlice({
    name: 'addWorkingCurriculum',
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
        checkHandler: (state, action: PayloadAction<boolean>) => {
            state.data.is_active = action.payload;
        },
        changeEducationBaseId: (state, action: PayloadAction<number | null>) => {
            state.data.education_base_id = action.payload;
        },
        changeFullTimeEducation: (state, action: PayloadAction<boolean>) => {
            state.data.is_full_time_education = action.payload;
        },
        setApprovalDate: (state, action: PayloadAction<string | null>) => {
            state.data.approval_date = action.payload;
        },
        clearData: (state) => {
            state.data = initialState.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewWorkingCurriculum.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addNewWorkingCurriculum.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addNewWorkingCurriculum.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addWorkingCurriculumActions } = addWorkingCurriculumSlice;
export const { reducer: addWorkingCurriculumReducer } = addWorkingCurriculumSlice;
