import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EducationBasesType, EducationBasesSchema } from '../types/educationBases';
import { fetchEducationBases } from '../services/fetchEducationBases/fetchEducationBases';

const initialState: EducationBasesSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const educationBasesSlice = createSlice({
    name: 'educationBases',
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
            .addCase(fetchEducationBases.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEducationBases.fulfilled, (state, action: PayloadAction<EducationBasesType[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEducationBases.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: educationBasesActions } = educationBasesSlice;
export const { reducer: educationBasesReducer } = educationBasesSlice;
