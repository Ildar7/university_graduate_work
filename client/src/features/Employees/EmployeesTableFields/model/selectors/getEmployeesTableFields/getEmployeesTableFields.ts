import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeesTableFieldsData = (state: StateSchema) => state.employeesTableFields?.data;
