import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourcesPage = (state: StateSchema) => state.arrivalSources?.page;
