import { StateSchema } from 'app/providers/StoreProvider';

export const getAddFinSourceError = (state: StateSchema) => state.addFinSource?.errors;
