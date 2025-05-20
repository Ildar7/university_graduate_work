import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduModuleErrors = (state: StateSchema) => state.addEduModule?.errors;
