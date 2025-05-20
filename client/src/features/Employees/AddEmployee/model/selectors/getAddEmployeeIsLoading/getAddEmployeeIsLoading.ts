import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEmployeeIsLoading = (state: StateSchema) => state.addEmployee?.isLoading;
