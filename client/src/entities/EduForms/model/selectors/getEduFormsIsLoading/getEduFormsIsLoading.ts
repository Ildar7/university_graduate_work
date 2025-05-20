import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormsIsLoading = (state: StateSchema) => state.eduForms?.isLoading;
