import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoriesLimit = (state: StateSchema) => state.employeeCategories?.limit;
