import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFinSources } from '../services/fetchFinSources/fetchFinSources';
import { FinSourcesData, FinSourcesSchema } from '../types/finSources';

const initialState: FinSourcesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const finSourcesSlice = createSlice({
    name: 'finSources',
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
            .addCase(fetchFinSources.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFinSources.fulfilled, (state, action: PayloadAction<FinSourcesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchFinSources.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: finSourcesActions } = finSourcesSlice;
export const { reducer: finSourcesReducer } = finSourcesSlice;
