import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentGroupsData = (state: StateSchema) => state.studentGroups?.data;
export const getStudentGroupsIsLoading = (state: StateSchema) => state.studentGroups?.isLoading;
export const getStudentGroupsError = (state: StateSchema) => state.studentGroups?.error;
