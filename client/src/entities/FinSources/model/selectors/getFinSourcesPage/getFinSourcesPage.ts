import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourcesPage = (state: StateSchema) => state.finSources?.page;
