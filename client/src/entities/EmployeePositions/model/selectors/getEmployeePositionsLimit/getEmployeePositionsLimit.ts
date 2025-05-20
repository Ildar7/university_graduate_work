import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionsLimit = (state: StateSchema) => state.employeePositions?.limit;
