import { StateSchema } from 'app/providers/StoreProvider';

export const getEventsTypeDetailData = (state: StateSchema) => state.eventsTypeDetail?.data;
