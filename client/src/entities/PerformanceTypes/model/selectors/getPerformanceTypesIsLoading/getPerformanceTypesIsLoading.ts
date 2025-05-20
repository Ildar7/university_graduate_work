import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypesIsLoading = (state: StateSchema) => state.performanceTypes?.isLoading;
