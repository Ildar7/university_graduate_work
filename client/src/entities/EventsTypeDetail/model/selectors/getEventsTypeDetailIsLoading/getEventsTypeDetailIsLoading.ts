import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypeDetailIsLoading = (state: StateSchema) => state.eventsTypeDetail?.isLoading;
