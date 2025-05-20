import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguagesType, LanguagesSchema } from '../types/languagesSchema';
import { fetchLanguages } from '../services/fetchLanguages/fetchLanguages';

const initialState: LanguagesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const languagesSlice = createSlice({
    name: 'languages',
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
            .addCase(fetchLanguages.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchLanguages.fulfilled, (state, action: PayloadAction<LanguagesType[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchLanguages.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: languagesActions } = languagesSlice;
export const { reducer: languagesReducer } = languagesSlice;
