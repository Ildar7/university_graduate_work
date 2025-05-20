import { StateSchema } from 'app/providers/StoreProvider';

export const getEditFinSourceData = (state: StateSchema) => state.editFinSource?.data;
