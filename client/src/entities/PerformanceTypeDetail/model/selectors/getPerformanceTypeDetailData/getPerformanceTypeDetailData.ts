import { StateSchema } from 'app/providers/StoreProvider';

export const getPerformanceTypeDetailData = (state: StateSchema) => state.performanceTypeDetail?.data;
