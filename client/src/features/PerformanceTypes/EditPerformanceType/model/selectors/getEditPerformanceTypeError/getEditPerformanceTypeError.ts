import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPerformanceTypeError = (state: StateSchema) => state.editPerformanceType?.errors;
