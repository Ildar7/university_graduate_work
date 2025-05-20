import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAutoDistributionStudentGroupsGeneratedDistribution,
} from '../services/fetchAutoDistributionStudentGroupsGeneratedDistribution/fetchAutoDistributionStudentGroupsGeneratedDistribution';
import {
    AutoDistributionStudentGroupsGenerateData,
} from '../types/autoDistributionStudentGroupsGenerate';
import { AutoDistributionStudentGroupsSchema } from '../types/autoDistributionStudentGroups';
import {
    massLinkStudentsToGroups,
} from '../services/massLinkStudentsToGroups/massLinkStudentsToGroups';
import {
    AutoDistributionStudentGroupsMassLinkData,
} from '../types/autoDistributionStudentGroupsMassLink';

const initialState: AutoDistributionStudentGroupsSchema = {
    generatedDistribution: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
    massLink: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
};

const autoDistributionStudentGroupsSlice = createSlice({
    name: 'autoDistributionStudentGroups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAutoDistributionStudentGroupsGeneratedDistribution.pending, (state) => {
                state.generatedDistribution.data = undefined;
                state.generatedDistribution.isLoading = true;
            })
            .addCase(fetchAutoDistributionStudentGroupsGeneratedDistribution.fulfilled, (
                state,
                action: PayloadAction<AutoDistributionStudentGroupsGenerateData>,
            ) => {
                state.generatedDistribution.isLoading = false;
                state.generatedDistribution.data = action.payload;
            })
            .addCase(fetchAutoDistributionStudentGroupsGeneratedDistribution.rejected, (state, action) => {
                state.generatedDistribution.isLoading = false;
                state.generatedDistribution.error = action.payload;
            })
            .addCase(massLinkStudentsToGroups.pending, (state) => {
                state.massLink.data = undefined;
                state.massLink.isLoading = true;
            })
            .addCase(massLinkStudentsToGroups.fulfilled, (
                state,
                action: PayloadAction<AutoDistributionStudentGroupsMassLinkData>,
            ) => {
                state.massLink.isLoading = false;
                state.massLink.data = action.payload;
            })
            .addCase(massLinkStudentsToGroups.rejected, (state, action) => {
                state.massLink.isLoading = false;
                state.massLink.error = action.payload;
            });
    },
});

export const { actions: autoDistributionStudentGroupsActions } = autoDistributionStudentGroupsSlice;
export const { reducer: autoDistributionStudentGroupsReducer } = autoDistributionStudentGroupsSlice;
