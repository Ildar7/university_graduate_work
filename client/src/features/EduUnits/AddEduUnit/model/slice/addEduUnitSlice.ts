import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddEduUnitSchema } from '../types/addEduUnit';
import { addEduUnit } from '../services/addEduUnit/addEduUnit';

const initialState: AddEduUnitSchema = {
    data: {
        name: '',
        sort: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEduUnitSlice = createSlice({
    name: 'addEduUnit',
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = initialState.data;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.data!.name = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.data!.sort = Number(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEduUnit.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEduUnit.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEduUnit.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEduUnitActions } = addEduUnitSlice;
export const { reducer: addEduUnitReducer } = addEduUnitSlice;
