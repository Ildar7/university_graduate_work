import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationsLimit = (state: StateSchema) => state.employeeEducations?.limit;
