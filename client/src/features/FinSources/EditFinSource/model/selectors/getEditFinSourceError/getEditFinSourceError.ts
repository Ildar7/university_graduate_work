import { StateSchema } from 'app/providers/StoreProvider';

export const getEditFinSourceError = (state: StateSchema) => state.editFinSource?.errors;
