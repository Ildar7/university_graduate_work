import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EduActivitiesTypes, EduActivitiesTypesSchema } from '../types/eduActivitiesTypes';
import {
    fetchEduActivitiesTypes,
} from '../services/fetchEduActivitiesTypes/fetchEduActivitiesTypes';

const initialState: EduActivitiesTypesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};

const eduActivitiesTypesSlice = createSlice({
    name: 'eduActivitiesTypes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEduActivitiesTypes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEduActivitiesTypes.fulfilled, (state, action: PayloadAction<EduActivitiesTypes[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEduActivitiesTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: eduActivitiesTypesActions } = eduActivitiesTypesSlice;
export const { reducer: eduActivitiesTypesReducer } = eduActivitiesTypesSlice;
