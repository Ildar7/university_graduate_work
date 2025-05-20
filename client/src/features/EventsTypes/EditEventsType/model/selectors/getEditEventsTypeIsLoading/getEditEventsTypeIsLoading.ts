import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEventsTypeIsLoading = (state: StateSchema) => state.editEventsType?.isLoading;
