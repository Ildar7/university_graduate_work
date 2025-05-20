import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourcesIsLoading = (state: StateSchema) => state.arrivalSources?.isLoading;
