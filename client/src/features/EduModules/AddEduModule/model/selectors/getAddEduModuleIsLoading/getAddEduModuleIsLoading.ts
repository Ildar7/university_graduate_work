import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduModuleIsLoading = (state: StateSchema) => state.addEduModule?.isLoading;
