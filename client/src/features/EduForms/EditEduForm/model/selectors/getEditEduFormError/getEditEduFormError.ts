import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduFormError = (state: StateSchema) => state.editEduForm?.errors;
