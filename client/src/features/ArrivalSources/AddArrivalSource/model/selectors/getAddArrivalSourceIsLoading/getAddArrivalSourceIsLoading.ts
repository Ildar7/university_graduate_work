import { StateSchema } from 'app/providers/StoreProvider';

export const getAddArrivalSourceIsLoading = (state: StateSchema) => state.addArrivalSource?.isLoading;
