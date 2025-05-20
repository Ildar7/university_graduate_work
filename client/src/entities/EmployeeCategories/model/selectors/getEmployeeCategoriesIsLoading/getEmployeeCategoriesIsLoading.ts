import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoriesIsLoading = (state: StateSchema) => state.employeeCategories?.isLoading;
