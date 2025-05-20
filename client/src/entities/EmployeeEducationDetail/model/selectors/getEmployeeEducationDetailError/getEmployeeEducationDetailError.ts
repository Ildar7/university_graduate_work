import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationDetailError = (state: StateSchema) => state.employeeEducationDetail?.error;
