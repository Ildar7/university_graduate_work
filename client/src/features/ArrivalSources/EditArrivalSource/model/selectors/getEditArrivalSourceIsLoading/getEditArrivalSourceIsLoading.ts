import { StateSchema } from 'app/providers/StoreProvider';

export const getEditArrivalSourceIsLoading = (state: StateSchema) => state.editArrivalSource?.isLoading;
