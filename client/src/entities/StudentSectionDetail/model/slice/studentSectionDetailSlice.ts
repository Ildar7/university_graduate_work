import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchStudentSectionDetail,
} from '../services/fetchStudentSectionDetail/fetchStudentSectionDetail';
import {
    StudentSectionDetailSchema,
    StudentSectionDetailType,
} from '../types/studentSectionDetail';

const initialState: StudentSectionDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const studentSectionDetailSlice = createSlice({
    name: 'studentSectionDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentSectionDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentSectionDetail.fulfilled, (state, action: PayloadAction<StudentSectionDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudentSectionDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentSectionDetailActions } = studentSectionDetailSlice;
export const { reducer: studentSectionDetailReducer } = studentSectionDetailSlice;
