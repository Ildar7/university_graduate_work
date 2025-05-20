import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeCategoryData = (state: StateSchema) => state.addEmployeeCategory?.data;
export const getAddEmployeeCategoryErrors = (state: StateSchema) => state.addEmployeeCategory?.errors;
export const getAddEmployeeCategoryIsLoading = (state: StateSchema) => state.addEmployeeCategory?.isLoading;
