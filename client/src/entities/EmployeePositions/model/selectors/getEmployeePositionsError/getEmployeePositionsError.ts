import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionsError = (state: StateSchema) => state.employeePositions?.error;
