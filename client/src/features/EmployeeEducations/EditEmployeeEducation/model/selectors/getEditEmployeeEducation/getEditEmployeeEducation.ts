import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeEducationData = (state: StateSchema) => state.editEmployeeEducation?.data;
export const getEditEmployeeEducationErrors = (state: StateSchema) => state.editEmployeeEducation?.errors;
export const getEditEmployeeEducationIsLoading = (state: StateSchema) => state.editEmployeeEducation?.isLoading;
export const getEditEmployeeEducationNewFields = (state: StateSchema) => state.editEmployeeEducation?.newFields;
