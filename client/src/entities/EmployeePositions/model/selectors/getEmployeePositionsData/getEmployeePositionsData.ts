import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionsData = (state: StateSchema) => state.employeePositions?.data;
