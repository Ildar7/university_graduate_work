import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentGroupDetailSchema, StudentGroupDetailType } from '../types/studentGroupDetail';
import { fetchStudentGroupDetail } from '../services/fetchStudentGroupDetail/fetchStudentGroupDetail';

const initialState: StudentGroupDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const studentGroupDetailSlice = createSlice({
    name: 'studentGroupDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentGroupDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentGroupDetail.fulfilled, (state, action: PayloadAction<StudentGroupDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudentGroupDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentGroupDetailActions } = studentGroupDetailSlice;
export const { reducer: studentGroupDetailReducer } = studentGroupDetailSlice;
