import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeCategoryDetailData = (state: StateSchema) => state.employeeCategoryDetail?.data;
