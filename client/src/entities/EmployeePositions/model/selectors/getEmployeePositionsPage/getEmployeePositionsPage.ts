import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionsPage = (state: StateSchema) => state.employeePositions?.page;
