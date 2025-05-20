import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypesError = (state: StateSchema) => state.performanceTypes?.error;
