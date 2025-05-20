import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypesPage = (state: StateSchema) => state.performanceTypes?.page;
