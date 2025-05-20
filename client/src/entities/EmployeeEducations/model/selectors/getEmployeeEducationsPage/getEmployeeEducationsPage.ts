import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationsPage = (state: StateSchema) => state.employeeEducations?.page;
