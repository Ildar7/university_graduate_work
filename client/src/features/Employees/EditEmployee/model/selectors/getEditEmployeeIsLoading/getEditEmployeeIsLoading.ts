import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeIsLoading = (state: StateSchema) => state.editEmployee?.isLoading;
