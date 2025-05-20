import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeCategoryData = (state: StateSchema) => state.editEmployeeCategory?.data;
export const getEditEmployeeCategoryErrors = (state: StateSchema) => state.editEmployeeCategory?.errors;
export const getEditEmployeeCategoryIsLoading = (state: StateSchema) => state.editEmployeeCategory?.isLoading;
export const getEditEmployeeCategoryNewFields = (state: StateSchema) => state.editEmployeeCategory?.newFields;
