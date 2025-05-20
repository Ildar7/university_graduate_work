import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypesPage = (state: StateSchema) => state.eventsTypes?.page;
