import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeErrors = (state: StateSchema) => state.addEmployee?.errors;
