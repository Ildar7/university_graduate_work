import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentGroupsType, StudentGroupsSchema } from '../types/studentGroups';
import { fetchStudentGroups } from '../services/fetchStudentGroups/fetchStudentGroups';

const initialState: StudentGroupsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};

const studentGroupsSlice = createSlice({
    name: 'studentGroups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentGroups.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentGroups.fulfilled, (state, action: PayloadAction<StudentGroupsType[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudentGroups.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentGroupsActions } = studentGroupsSlice;
export const { reducer: studentGroupsReducer } = studentGroupsSlice;
