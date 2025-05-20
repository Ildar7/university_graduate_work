import { StateSchema } from 'app/providers/StoreProvider';

export const getEduModulesError = (state: StateSchema) => state.eduModules?.error;
