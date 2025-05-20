import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypesData = (state: StateSchema) => state.performanceTypes?.data;
