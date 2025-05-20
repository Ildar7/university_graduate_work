import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoriesData = (state: StateSchema) => state.employeeCategories?.data;
