import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEduForms } from '../services/fetchEduForms/fetchEduForms';
import { EduFormsData, EduFormsSchema } from '../types/eduForms';

const initialState: EduFormsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const eduFormsSlice = createSlice({
    name: 'eduForms',
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
            .addCase(fetchEduForms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEduForms.fulfilled, (state, action: PayloadAction<EduFormsData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchEduForms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eduFormsActions } = eduFormsSlice;
export const { reducer: eduFormsReducer } = eduFormsSlice;
