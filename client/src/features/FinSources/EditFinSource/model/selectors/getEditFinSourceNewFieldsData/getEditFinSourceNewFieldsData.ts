import { StateSchema } from 'app/providers/StoreProvider';

export const getEditFinSourceNewFieldsData = (state: StateSchema) => state.editFinSource?.newFields?.title;
