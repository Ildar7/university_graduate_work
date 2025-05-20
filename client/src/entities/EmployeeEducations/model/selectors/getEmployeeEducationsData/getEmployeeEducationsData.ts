import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationsData = (state: StateSchema) => state.employeeEducations?.data;
