import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormsPage = (state: StateSchema) => state.eduForms?.page;
