import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPerformanceTypeValue = (state: StateSchema) => state.addPerformanceType?.data.value;
