import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeData = (state: StateSchema) => state.editEmployee?.data;
