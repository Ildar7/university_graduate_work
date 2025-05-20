import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeePositionData = (state: StateSchema) => state.editEmployeePosition?.data;
export const getEditEmployeePositionErrors = (state: StateSchema) => state.editEmployeePosition?.errors;
export const getEditEmployeePositionIsLoading = (state: StateSchema) => state.editEmployeePosition?.isLoading;
export const getEditEmployeePositionNewFields = (state: StateSchema) => state.editEmployeePosition?.newFields;
