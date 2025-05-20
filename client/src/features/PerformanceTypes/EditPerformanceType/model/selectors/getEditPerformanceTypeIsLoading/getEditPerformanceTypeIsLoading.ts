import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPerformanceTypeIsLoading = (state: StateSchema) => state.editPerformanceType?.isLoading;
