import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduFormError = (state: StateSchema) => state.addEduForm?.errors;
