import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpecialtiesSchema } from 'entities/Specialties';
import { SpecialtiesData } from 'entities/Specialties/model/types/specialties';
import { fetchSpecialties } from '../services/fetchSpecialties/fetchSpecialties';

const initialState: SpecialtiesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const specialtiesSlice = createSlice({
    name: 'specialties',
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
            .addCase(fetchSpecialties.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchSpecialties.fulfilled, (state, action: PayloadAction<SpecialtiesData>) => {
                state.isLoading = false;
                state.data = {
                    data: action.payload.data,
                    pagination: action.payload.pagination,
                };
            })
            .addCase(fetchSpecialties.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: specialtiesActions } = specialtiesSlice;
export const { reducer: specialtiesReducer } = specialtiesSlice;
