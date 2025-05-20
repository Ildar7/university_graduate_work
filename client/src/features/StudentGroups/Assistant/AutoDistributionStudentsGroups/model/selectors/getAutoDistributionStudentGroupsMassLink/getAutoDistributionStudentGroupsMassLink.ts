import { StateSchema } from 'app/providers/StoreProvider';

export const getAutoDistributionStudentGroupsMassLinkData = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.massLink.data;
export const getAutoDistributionStudentGroupsMassLinkIsLoading = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.massLink.isLoading;
export const getAutoDistributionStudentGroupsMassLinkError = (
    state: StateSchema,
) => state.autoDistributionStudentGroupsAssistant?.massLink.error;
