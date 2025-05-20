import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourcesError = (state: StateSchema) => state.finSources?.error;
