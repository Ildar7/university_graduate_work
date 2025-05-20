import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeData = (state: StateSchema) => state.addEmployee?.data;
