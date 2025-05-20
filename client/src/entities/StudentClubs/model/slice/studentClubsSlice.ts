import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStudentClubs } from '../services/fetchStudentClubs/fetchStudentClubs';
import { StudentClubsData, StudentClubsSchema } from '../types/studentClubs';

const initialState: StudentClubsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const studentClubsSlice = createSlice({
    name: 'studentClubs',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<string>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentClubs.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentClubs.fulfilled, (state, action: PayloadAction<StudentClubsData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchStudentClubs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentClubsActions } = studentClubsSlice;
export const { reducer: studentClubsReducer } = studentClubsSlice;
