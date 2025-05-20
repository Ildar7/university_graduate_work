import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormsData = (state: StateSchema) => state.eduForms?.data;
