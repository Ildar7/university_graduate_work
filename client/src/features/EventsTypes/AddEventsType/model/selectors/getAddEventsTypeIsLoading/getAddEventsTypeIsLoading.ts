import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEventsTypeIsLoading = (state: StateSchema) => state.addEventsType?.isLoading;
