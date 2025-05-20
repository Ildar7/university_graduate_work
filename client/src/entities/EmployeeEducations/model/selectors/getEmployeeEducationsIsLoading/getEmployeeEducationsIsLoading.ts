import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationsIsLoading = (state: StateSchema) => state.employeeEducations?.isLoading;
