import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeEducationDetailIsLoading = (state: StateSchema) => state.employeeEducationDetail?.isLoading;
