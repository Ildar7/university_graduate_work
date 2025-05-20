import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEventsTypeError = (state: StateSchema) => state.addEventsType?.errors;
