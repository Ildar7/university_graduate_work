import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeEducationData = (state: StateSchema) => state.addEmployeeEducation?.data;
export const getAddEmployeeEducationErrors = (state: StateSchema) => state.addEmployeeEducation?.errors;
export const getAddEmployeeEducationIsLoading = (state: StateSchema) => state.addEmployeeEducation?.isLoading;
