import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypeDetailError = (state: StateSchema) => state.eventsTypeDetail?.error;
