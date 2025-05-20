import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourcesData = (state: StateSchema) => state.arrivalSources?.data;
