import { StateSchema } from 'app/providers/StoreProvider';

export const getAddFinSourceTitle = (state: StateSchema) => state.addFinSource?.data.title;
