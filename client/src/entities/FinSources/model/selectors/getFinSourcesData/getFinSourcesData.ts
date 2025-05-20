import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourcesData = (state: StateSchema) => state.finSources?.data;
