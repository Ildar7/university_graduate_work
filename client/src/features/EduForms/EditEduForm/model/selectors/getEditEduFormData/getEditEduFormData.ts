import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduFormData = (state: StateSchema) => state.editEduForm?.data;
