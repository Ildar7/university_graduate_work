import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStudentSections } from '../services/fetchStudentSections/fetchStudentSections';
import { StudentSectionsData, StudentSectionsSchema } from '../types/studentSections';

const initialState: StudentSectionsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const studentSectionsSlice = createSlice({
    name: 'studentSections',
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
            .addCase(fetchStudentSections.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudentSections.fulfilled, (state, action: PayloadAction<StudentSectionsData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchStudentSections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentSectionsActions } = studentSectionsSlice;
export const { reducer: studentSectionsReducer } = studentSectionsSlice;
