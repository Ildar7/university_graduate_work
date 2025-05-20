import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoryDetailIsLoading = (state: StateSchema) => state.employeeCategoryDetail?.isLoading;
