import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeErrors = (state: StateSchema) => state.editEmployee?.errors;
