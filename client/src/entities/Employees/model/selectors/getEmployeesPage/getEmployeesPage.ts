import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeesPage = (state: StateSchema) => state.employees?.page;
