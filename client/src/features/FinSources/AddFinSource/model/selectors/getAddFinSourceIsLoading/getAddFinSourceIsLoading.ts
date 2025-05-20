import { StateSchema } from 'app/providers/StoreProvider';

export const getAddFinSourceIsLoading = (state: StateSchema) => state.addFinSource?.isLoading;
