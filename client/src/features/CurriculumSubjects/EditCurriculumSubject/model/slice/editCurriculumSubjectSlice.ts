import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurriculumSubjectsDetailType } from 'entities/CurriculumSubjectsDetail';
import { EditCurriculumSubjectSchema } from '../types/editCurriculumSubject';
import { editCurriculumSubject } from '../services/editCurriculumSubject/editCurriculumSubject';

const initialState: EditCurriculumSubjectSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editCurriculumSubjectSlice = createSlice({
    name: 'editCurriculumSubject',
    initialState,
    reducers: {
        setCurriculumSubjectData: (state, action: PayloadAction<CurriculumSubjectsDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = action.payload;
            }
        },
        setName: (state, action: PayloadAction<string | null>) => {
            state.newFields!.name = action.payload;
        },
        setModuleId: (state, action: PayloadAction<string>) => {
            state.newFields!.module_id = Number(action.payload);
        },
        setUnitId: (state, action: PayloadAction<string | null>) => {
            state.newFields!.unit_id = action.payload ? Number(action.payload) : null;
        },
        clearNewFields: (state) => {
            state.newFields = state.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editCurriculumSubject.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editCurriculumSubject.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editCurriculumSubject.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editCurriculumSubjectActions } = editCurriculumSubjectSlice;
export const { reducer: editCurriculumSubjectReducer } = editCurriculumSubjectSlice;
