import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypeDetailError = (state: StateSchema) => state.performanceTypeDetail?.error;
