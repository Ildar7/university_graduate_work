import { StateSchema } from 'app/providers/StoreProvider';

export const getArrivalSourceDetailData = (state: StateSchema) => state.arrivalSourceDetail?.data;
