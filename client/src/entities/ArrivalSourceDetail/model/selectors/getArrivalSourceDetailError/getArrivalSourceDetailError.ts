import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourceDetailError = (state: StateSchema) => state.arrivalSourceDetail?.error;
