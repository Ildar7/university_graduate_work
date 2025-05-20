import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeePositionToEmployeeData = (state: StateSchema) => state.addEmployeePositionToEmployee?.data;
export const getAddEmployeePositionToEmployeeErrors = (state: StateSchema) => state.addEmployeePositionToEmployee?.errors;
export const getAddEmployeePositionToEmployeeIsLoading = (state: StateSchema) => state.addEmployeePositionToEmployee?.isLoading;
