import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypeDetailIsLoading = (state: StateSchema) => state.performanceTypeDetail?.isLoading;
