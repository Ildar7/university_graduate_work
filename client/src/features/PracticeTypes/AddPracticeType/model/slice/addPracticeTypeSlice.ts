import { createSlice } from '@reduxjs/toolkit';
import { AddPracticeTypeSchema } from '../types/addPracticeType';
import {
    addPracticeType,
} from '../services/addPracticeType/addPracticeType';

const initialState: AddPracticeTypeSchema = {
    data: {
        title: null,
    },
    isLoading: false,
    errors: undefined,
};

const addPracticeTypeSlice = createSlice({
    name: 'addPracticeType',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.data.title = action.payload;
        },
        clearData: (state) => {
            state.data = {
                title: null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPracticeType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addPracticeType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addPracticeType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addPracticeTypeActions } = addPracticeTypeSlice;
export const { reducer: addPracticeTypeReducer } = addPracticeTypeSlice;
