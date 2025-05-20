import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEventsTypeNewFieldsData = (state: StateSchema) => state.editEventsType?.newFields?.title;
