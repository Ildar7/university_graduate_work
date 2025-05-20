import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeePositionData = (state: StateSchema) => state.addEmployeePosition?.data;
export const getAddEmployeePositionErrors = (state: StateSchema) => state.addEmployeePosition?.errors;
export const getAddEmployeePositionIsLoading = (state: StateSchema) => state.addEmployeePosition?.isLoading;
