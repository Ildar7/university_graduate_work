import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchStudentClubDetail,
} from '../services/fetchStudentClubDetail/fetchStudentClubDetail';
import {
    StudentClubDetailSchema,
    StudentClubDetailType,
} from '../types/studentClubDetail';

const initialState: StudentClubDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const studentClubDetailSlice = createSlice({
    name: 'studentClubDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentClubDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentClubDetail.fulfilled, (state, action: PayloadAction<StudentClubDetailType>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudentClubDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentClubDetailActions } = studentClubDetailSlice;
export const { reducer: studentClubDetailReducer } = studentClubDetailSlice;
