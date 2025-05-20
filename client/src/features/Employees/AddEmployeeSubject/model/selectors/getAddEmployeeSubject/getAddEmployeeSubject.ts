import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeSubjectData = (state: StateSchema) => state.addEmployeeSubject?.data;
export const getAddEmployeeSubjectErrors = (state: StateSchema) => state.addEmployeeSubject?.errors;
export const getAddEmployeeSubjectIsLoading = (state: StateSchema) => state.addEmployeeSubject?.isLoading;
