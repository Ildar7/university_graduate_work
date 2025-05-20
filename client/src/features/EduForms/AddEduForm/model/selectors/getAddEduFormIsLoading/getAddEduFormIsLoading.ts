import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduFormIsLoading = (state: StateSchema) => state.addEduForm?.isLoading;
