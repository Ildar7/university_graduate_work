import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormsLimit = (state: StateSchema) => state.eduForms?.limit;
