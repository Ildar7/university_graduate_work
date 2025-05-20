import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduUnitError = (state: StateSchema) => state.editEduUnit?.errors;
