import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationsError = (state: StateSchema) => state.employeeEducations?.error;
