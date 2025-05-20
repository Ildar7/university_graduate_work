import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationDetailData = (state: StateSchema) => state.employeeEducationDetail?.data;
