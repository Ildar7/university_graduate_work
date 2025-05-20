import { StateSchema } from 'app/providers/StoreProvider';

export const getEditArrivalSourceNewFieldsData = (state: StateSchema) => state.editArrivalSource?.newFields?.title;
