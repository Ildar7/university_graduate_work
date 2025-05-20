import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddEduModuleSchema } from '../types/addEduModule';
import { addEduModule } from '../services/addEduModule/addEduModule';

const initialState: AddEduModuleSchema = {
    data: {
        name: '',
        basic_education: false,
        short_name: '',
        sort: null,
        study_time_in_credits: null,
    },
    isLoading: false,
    errors: undefined,
};

const addEduModuleSlice = createSlice({
    name: 'addEduModule',
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = initialState.data;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.data!.name = action.payload;
        },
        setShortName: (state, action: PayloadAction<string>) => {
            state.data!.short_name = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.data!.sort = Number(action.payload);
        },
        setStudyTimeInCredits: (state, action: PayloadAction<string>) => {
            state.data!.study_time_in_credits = Number(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEduModule.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(addEduModule.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addEduModule.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: addEduModuleActions } = addEduModuleSlice;
export const { reducer: addEduModuleReducer } = addEduModuleSlice;
