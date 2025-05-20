import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchResidenceTypes } from '../services/fetchResidenceTypes/fetchResidenceTypes';
import { ResidenceTypesData, ResidenceTypesSchema } from '../types/residenceTypes';

const initialState: ResidenceTypesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const residenceTypesSlice = createSlice({
    name: 'residenceTypes',
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
            .addCase(fetchResidenceTypes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchResidenceTypes.fulfilled, (state, action: PayloadAction<ResidenceTypesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchResidenceTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: residenceTypesActions } = residenceTypesSlice;
export const { reducer: residenceTypesReducer } = residenceTypesSlice;
