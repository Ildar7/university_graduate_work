import { StateSchema } from 'app/providers/StoreProvider';

export const getEditFinSourceIsLoading = (state: StateSchema) => state.editFinSource?.isLoading;
