import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeDetailIsLoading = (state: StateSchema) => state.employeeDetail?.isLoading;
