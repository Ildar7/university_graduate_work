import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourcesIsLoading = (state: StateSchema) => state.finSources?.isLoading;
