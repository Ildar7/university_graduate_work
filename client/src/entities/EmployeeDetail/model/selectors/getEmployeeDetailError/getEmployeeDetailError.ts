import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeDetailError = (state: StateSchema) => state.employeeDetail?.error;
