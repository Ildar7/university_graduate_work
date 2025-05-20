import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCurriculumSubject } from '../services/addCurriculumSubject/addCurriculumSubject';
import { AddCurriculumSubjectSchema } from '../types/addCurriculumSubject';

const initialState: AddCurriculumSubjectSchema = {
    data: {
        name: null,
        module_id: null,
        sort: null,
        unit_id: null,
    },
    isLoading: false,
    errors: undefined,
};

const addCurriculumSubjectSlice = createSlice({
    name: 'addCurriculumSubject',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string | null>) => {
            state.data!.name = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.data!.sort = +action.payload;
        },
        setModuleId: (state, action: PayloadAction<string>) => {
            state.data!.module_id = +action.payload;
        },
        setUnitId: (state, action: PayloadAction<string | null>) => {
            state.data!.unit_id = action.payload ? +action.payload : null;
        },
        clearData: (state) => {
            state.data = initialState.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCurriculumSubject.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addCurriculumSubject.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addCurriculumSubject.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addCurriculumSubjectActions } = addCurriculumSubjectSlice;
export const { reducer: addCurriculumSubjectReducer } = addCurriculumSubjectSlice;
