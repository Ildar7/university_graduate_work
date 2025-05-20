import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArrivalSources } from '../services/fetchArrivalSources/fetchArrivalSources';
import { ArrivalSourcesData, ArrivalSourcesSchema } from '../types/arrivalSources';

const initialState: ArrivalSourcesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const arrivalSourcesSlice = createSlice({
    name: 'arrivalSources',
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
            .addCase(fetchArrivalSources.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArrivalSources.fulfilled, (state, action: PayloadAction<ArrivalSourcesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchArrivalSources.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: arrivalSourcesActions } = arrivalSourcesSlice;
export const { reducer: arrivalSourcesReducer } = arrivalSourcesSlice;
