import { StateSchema } from 'app/providers/StoreProvider';

export const getAddArrivalSourceTitle = (state: StateSchema) => state.addArrivalSource?.data.title;
