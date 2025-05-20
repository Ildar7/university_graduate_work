import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StandardCurriculumSchema, StandardCurriculumType } from 'entities/StandardCurriculum';
import { StandardCurriculumData } from 'entities/StandardCurriculum/model/types/standardCurriculum';
import { fetchStandardCurriculum } from '../services/fetchStandardCurriculum/fetchStandardCurriculum';

const initialState: StandardCurriculumSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
    page: '1',
    limit: '50',
};

const standardCurriculumSlice = createSlice({
    name: 'standardCurriculum',
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
            .addCase(fetchStandardCurriculum.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStandardCurriculum.fulfilled, (state, action: PayloadAction<StandardCurriculumType[]>) => {
                state.isLoading = false;
                state.data = action.payload.sort((a, b) => a.sort - b.sort);
            })
            .addCase(fetchStandardCurriculum.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: standardCurriculumActions } = standardCurriculumSlice;
export const { reducer: standardCurriculumReducer } = standardCurriculumSlice;
