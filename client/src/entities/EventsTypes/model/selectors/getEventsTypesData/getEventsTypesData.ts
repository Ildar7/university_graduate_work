import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypesData = (state: StateSchema) => state.eventsTypes?.data;
