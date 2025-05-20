import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPerformanceTypeIsLoading = (state: StateSchema) => state.addPerformanceType?.isLoading;
