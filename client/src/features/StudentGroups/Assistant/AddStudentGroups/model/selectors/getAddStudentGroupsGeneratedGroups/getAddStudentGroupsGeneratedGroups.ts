import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentGroupsGeneratedGroupsData = (state: StateSchema) => state.addStudentGroupsAssistant?.generatedGroups.data;
export const getAddStudentGroupsGeneratedGroupsIsLoading = (state: StateSchema) => state.addStudentGroupsAssistant?.generatedGroups.isLoading;
export const getAddStudentGroupsGeneratedGroupsError = (state: StateSchema) => state.addStudentGroupsAssistant?.generatedGroups.error;
