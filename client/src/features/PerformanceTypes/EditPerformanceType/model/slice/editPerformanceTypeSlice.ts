import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditPerformanceTypeSchema } from 'features/PerformanceTypes/EditPerformanceType';
import { PerformanceTypeDetailType } from 'entities/PerformanceTypeDetail';
import {
    editPerformanceType,
} from '../services/editPerformanceType/editPerformanceType';

const initialState: EditPerformanceTypeSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editPerformanceTypeSlice = createSlice({
    name: 'editPerformanceType',
    initialState,
    reducers: {
        setPerformanceTypeData: (state, action: PayloadAction<PerformanceTypeDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.academicperformancesemester,
                    value: state.data.perfomance_value,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        setValue: (state, action: PayloadAction<string>) => {
            state.newFields!.value = +action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.academicperformancesemester || null,
                value: state.data?.perfomance_value || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editPerformanceType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editPerformanceType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editPerformanceType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editPerformanceTypeActions } = editPerformanceTypeSlice;
export const { reducer: editPerformanceTypeReducer } = editPerformanceTypeSlice;
