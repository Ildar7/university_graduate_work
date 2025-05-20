import { StateSchema } from 'app/providers/StoreProvider';

export const getAutoDistributionStudentGroupsGeneratedDistributionData = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.generatedDistribution.data;
export const getAutoDistributionStudentGroupsGeneratedDistributionIsLoading = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.generatedDistribution.isLoading;
export const getAutoDistributionStudentGroupsGeneratedDistributionError = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.generatedDistribution.error;
