import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPerformanceTypeError = (state: StateSchema) => state.addPerformanceType?.errors;
