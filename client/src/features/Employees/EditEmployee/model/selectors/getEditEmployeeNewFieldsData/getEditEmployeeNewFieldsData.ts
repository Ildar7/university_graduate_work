import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEmployeeNewFieldsData = (state: StateSchema) => state.editEmployee?.newFields;
