import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEventsTypeData = (state: StateSchema) => state.editEventsType?.data;
