import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPerformanceTypeTitle = (state: StateSchema) => state.addPerformanceType?.data.title;
