import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourcesLimit = (state: StateSchema) => state.finSources?.limit;
