import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPerformanceTypeNewFieldsData = (state: StateSchema) => state.editPerformanceType?.newFields;
