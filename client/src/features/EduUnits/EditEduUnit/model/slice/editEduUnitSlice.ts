import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EducationalUnitDetailData } from 'entities/EducationalUnitDetail';
import { editEduUnit } from '../services/editEduUnit/editEduUnit';
import { EditEduUnitSchema } from '../types/editEduUnit';

const initialState: EditEduUnitSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEduUnitSlice = createSlice({
    name: 'editEduUnit',
    initialState,
    reducers: {
        setEditEduUnitData: (state, action: PayloadAction<EducationalUnitDetailData | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = action.payload;
            }
        },
        setName: (state, action: PayloadAction<string>) => {
            state.newFields!.name = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.newFields!.sort = Number(action.payload);
        },
        clearNewFields: (state) => {
            state.newFields = initialState.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEduUnit.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEduUnit.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEduUnit.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEduUnitActions } = editEduUnitSlice;
export const { reducer: editEduUnitReducer } = editEduUnitSlice;
