import { StateSchema } from 'app/providers/StoreProvider';

export const getEduModulesIsLoading = (state: StateSchema) => state.eduModules?.isLoading;
