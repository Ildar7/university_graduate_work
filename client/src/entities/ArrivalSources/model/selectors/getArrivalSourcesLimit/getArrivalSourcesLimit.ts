import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourcesLimit = (state: StateSchema) => state.arrivalSources?.limit;
