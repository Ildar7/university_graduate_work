import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeDetailData = (state: StateSchema) => state.employeeDetail?.data;
