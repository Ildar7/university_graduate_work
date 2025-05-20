import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypesLimit = (state: StateSchema) => state.eventsTypes?.limit;
