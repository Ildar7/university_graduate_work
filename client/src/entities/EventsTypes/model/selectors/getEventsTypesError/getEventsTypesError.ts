import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypesError = (state: StateSchema) => state.eventsTypes?.error;
