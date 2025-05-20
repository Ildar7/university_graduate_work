import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionsIsLoading = (state: StateSchema) => state.employeePositions?.isLoading;
