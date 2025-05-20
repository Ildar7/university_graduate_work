import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EducationalModuleDetailData } from 'entities/EducationalModuleDetail';
import { EditEduModuleSchema } from 'features/EduModules/EditEduModule';
import { editEduModule } from '../services/editEduModule/editEduModule';

const initialState: EditEduModuleSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEduModuleSlice = createSlice({
    name: 'editEduModule',
    initialState,
    reducers: {
        setEditEduModuleData: (state, action: PayloadAction<EducationalModuleDetailData | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = action.payload;
            }
        },
        setName: (state, action: PayloadAction<string>) => {
            state.newFields!.name = action.payload;
        },
        setShortName: (state, action: PayloadAction<string>) => {
            state.newFields!.short_name = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.newFields!.sort = Number(action.payload);
        },
        setStudyTimeInCredits: (state, action: PayloadAction<string>) => {
            state.newFields!.study_time_in_credits = Number(action.payload);
        },
        clearNewFields: (state) => {
            state.newFields = initialState.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEduModule.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEduModule.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEduModule.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEduModuleActions } = editEduModuleSlice;
export const { reducer: editEduModuleReducer } = editEduModuleSlice;
