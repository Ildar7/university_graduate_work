import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormsError = (state: StateSchema) => state.eduForms?.error;
