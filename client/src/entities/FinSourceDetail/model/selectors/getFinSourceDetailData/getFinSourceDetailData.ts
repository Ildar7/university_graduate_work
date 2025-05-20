import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourceDetailData = (state: StateSchema) => state.finSourcesDetail?.data;
