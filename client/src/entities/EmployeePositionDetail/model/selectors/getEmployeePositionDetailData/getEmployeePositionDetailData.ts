import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeePositionDetailData = (state: StateSchema) => state.employeePositionDetail?.data;
