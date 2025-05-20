import { StateSchema } from 'app/providers/StoreProvider';

export const getEditArrivalSourceError = (state: StateSchema) => state.editArrivalSource?.errors;
