import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourceDetailIsLoading = (state: StateSchema) => state.arrivalSourceDetail?.isLoading;
