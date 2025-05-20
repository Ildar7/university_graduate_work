import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduModuleError = (state: StateSchema) => state.editEduModule?.errors;
