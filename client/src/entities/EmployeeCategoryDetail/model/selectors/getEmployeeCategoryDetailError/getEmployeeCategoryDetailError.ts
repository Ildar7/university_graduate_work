import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoryDetailError = (state: StateSchema) => state.employeeCategoryDetail?.error;
