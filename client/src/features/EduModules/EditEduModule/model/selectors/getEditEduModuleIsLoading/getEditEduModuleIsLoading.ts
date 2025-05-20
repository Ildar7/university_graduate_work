import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduModuleIsLoading = (state: StateSchema) => state.editEduModule?.isLoading;
