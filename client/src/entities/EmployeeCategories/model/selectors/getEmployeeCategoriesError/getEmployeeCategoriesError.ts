import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoriesError = (state: StateSchema) => state.employeeCategories?.error;
