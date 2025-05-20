import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduFormIsLoading = (state: StateSchema) => state.editEduForm?.isLoading;
