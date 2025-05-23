import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPracticeTypes } from '../services/fetchPracticeTypes/fetchPracticeTypes';
import { PracticeTypesData, PracticeTypesSchema } from '../types/practiceTypes';

const initialState: PracticeTypesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const practiceTypesSlice = createSlice({
    name: 'practiceTypes',
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
            .addCase(fetchPracticeTypes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPracticeTypes.fulfilled, (state, action: PayloadAction<PracticeTypesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchPracticeTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: practiceTypesActions } = practiceTypesSlice;
export const { reducer: practiceTypesReducer } = practiceTypesSlice;
