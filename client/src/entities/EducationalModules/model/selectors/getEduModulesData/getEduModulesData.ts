import { StateSchema } from 'app/providers/StoreProvider';

export const getEduModulesData = (state: StateSchema) => state.eduModules?.data;
