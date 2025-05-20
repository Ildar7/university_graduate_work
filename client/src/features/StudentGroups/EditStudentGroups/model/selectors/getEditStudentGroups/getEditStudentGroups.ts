import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentGroupsData = (state: StateSchema) => state.editStudentGroup?.data;
export const getEditStudentGroupsErrors = (state: StateSchema) => state.editStudentGroup?.errors;
export const getEditStudentGroupsIsLoading = (state: StateSchema) => state.editStudentGroup?.isLoading;
export const getEditStudentGroupsNewFields = (state: StateSchema) => state.editStudentGroup?.newFields;
