import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchEducationalModules,
} from '../services/fetchEducationalModules/fetchEducationalModules';
import { EducationalModulesData, EducationalModulesSchema, EducationalUnitsData } from '../types/educationalModules';
import {
    fetchEducationalUnits,
} from '../services/fetchEducationalUnits/fetchEducationalUnits';

const initialState: EducationalModulesSchema = {
    data: undefined,
    dataUnits: [],
    isLoading: true,
    isLoadingUnits: true,
    error: undefined,
    errorUnits: undefined,
};

const educationalModulesSlice = createSlice({
    name: 'educationalModules',
    initialState,
    reducers: {
        setUnitsToData: (state) => {
            const modulesLength = state.data!.length;

            for (let i = 0; i < modulesLength; i++) {
                const thisModuleId = state.data![i].module_id;
                const filteredUnits = state.dataUnits.filter((unit) => unit.module_id === thisModuleId);

                state.data![i].units = filteredUnits;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducationalModules.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEducationalModules.fulfilled, (state, action: PayloadAction<EducationalModulesData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEducationalModules.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchEducationalUnits.pending, (state) => {
                state.errorUnits = undefined;
                state.isLoadingUnits = true;
            })
            .addCase(fetchEducationalUnits.fulfilled, (state, action: PayloadAction<EducationalUnitsData[]>) => {
                state.isLoadingUnits = false;
                state.dataUnits = action.payload;
            })
            .addCase(fetchEducationalUnits.rejected, (state, action) => {
                state.isLoadingUnits = false;
                state.errorUnits = action.payload;
            });
    },
});

export const { actions: educationalModulesActions } = educationalModulesSlice;
export const { reducer: educationalModulesReducer } = educationalModulesSlice;
