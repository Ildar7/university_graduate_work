import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentGroupsBatchedData = (state: StateSchema) => state.addStudentGroupsAssistant?.batchInfo.data;
export const getAddStudentGroupsBatchedIsLoading = (state: StateSchema) => state.addStudentGroupsAssistant?.batchInfo.isLoading;
export const getAddStudentGroupsBatchedError = (state: StateSchema) => state.addStudentGroupsAssistant?.batchInfo.error;
