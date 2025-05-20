import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourcesError = (state: StateSchema) => state.arrivalSources?.error;
