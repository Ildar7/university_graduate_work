import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEventsTypeTitle = (state: StateSchema) => state.addEventsType?.data.title;
