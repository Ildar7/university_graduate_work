import { StateSchema } from 'app/providers/StoreProvider';

export const getAddArrivalSourceError = (state: StateSchema) => state.addArrivalSource?.errors;
