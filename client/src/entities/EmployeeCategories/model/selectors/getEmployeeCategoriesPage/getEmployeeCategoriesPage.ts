import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoriesPage = (state: StateSchema) => state.employeeCategories?.page;
