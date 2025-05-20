import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditWorkingCurriculumType, EditWorkingCurriculumSchema } from '../types/editWorkingCurriculum';
import {
    editWorkingCurriculum,
} from '../services/editWorkingCurriculum/editWorkingCurriculum';

const initialState: EditWorkingCurriculumSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editWorkingCurriculumSlice = createSlice({
    name: 'editWorkingCurriculum',
    initialState,
    reducers: {
        setWorkingCurriculumData: (state, action: PayloadAction<EditWorkingCurriculumType | undefined>) => {
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
        checkHandler: (state, action: PayloadAction<boolean>) => {
            state.newFields!.is_active = action.payload;
        },
        changeEducationBaseId: (state, action: PayloadAction<number | null>) => {
            state.newFields!.education_base_id = action.payload;
        },
        changeFullTimeEducation: (state, action: PayloadAction<boolean>) => {
            state.newFields!.is_full_time_education = action.payload;
        },
        setApprovalDate: (state, action: PayloadAction<string | null>) => {
            state.newFields!.approval_date = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = state.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editWorkingCurriculum.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editWorkingCurriculum.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editWorkingCurriculum.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editWorkingCurriculumActions } = editWorkingCurriculumSlice;
export const { reducer: editWorkingCurriculumReducer } = editWorkingCurriculumSlice;
