import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionDetailIsLoading = (state: StateSchema) => state.employeePositionDetail?.isLoading;
