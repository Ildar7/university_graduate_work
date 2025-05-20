import { StateSchema } from 'app/providers/StoreProvider';

export const getEditArrivalSourceData = (state: StateSchema) => state.editArrivalSource?.data;
