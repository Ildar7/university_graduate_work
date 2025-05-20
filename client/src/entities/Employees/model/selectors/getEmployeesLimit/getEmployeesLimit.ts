import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeesLimit = (state: StateSchema) => state.employees?.limit;
