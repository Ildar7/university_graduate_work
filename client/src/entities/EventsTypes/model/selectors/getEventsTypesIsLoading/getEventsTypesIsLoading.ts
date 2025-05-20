import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypesIsLoading = (state: StateSchema) => state.eventsTypes?.isLoading;
