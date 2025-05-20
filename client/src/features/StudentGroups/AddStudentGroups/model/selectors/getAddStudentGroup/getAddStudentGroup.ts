import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentGroupData = (state: StateSchema) => state.addStudentGroup?.data;
export const getAddStudentGroupIsLoading = (state: StateSchema) => state.addStudentGroup?.isLoading;
export const getAddStudentGroupErrors = (state: StateSchema) => state.addStudentGroup?.errors;
