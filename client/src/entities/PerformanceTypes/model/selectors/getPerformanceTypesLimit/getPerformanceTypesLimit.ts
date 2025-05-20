import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypesLimit = (state: StateSchema) => state.performanceTypes?.limit;
