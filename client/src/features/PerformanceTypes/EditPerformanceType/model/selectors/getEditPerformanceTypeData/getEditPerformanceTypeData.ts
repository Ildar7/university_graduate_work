import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPerformanceTypeData = (state: StateSchema) => state.editPerformanceType?.data;
