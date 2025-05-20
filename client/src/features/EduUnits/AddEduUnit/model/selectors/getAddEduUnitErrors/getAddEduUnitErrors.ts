import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduUnitErrors = (state: StateSchema) => state.addEduUnit?.errors;
