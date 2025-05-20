import { StateSchema } from 'app/providers/StoreProvider';

export const getLanguagesData = (state: StateSchema) => state.languages?.data;
export const getLanguagesIsLoading = (state: StateSchema) => state.languages?.isLoading;
export const getLanguagesError = (state: StateSchema) => state.languages?.error;
