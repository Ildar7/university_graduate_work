import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEventsTypeError = (state: StateSchema) => state.editEventsType?.errors;
