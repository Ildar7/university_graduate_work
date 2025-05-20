import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionDetailError = (state: StateSchema) => state.employeePositionDetail?.error;
