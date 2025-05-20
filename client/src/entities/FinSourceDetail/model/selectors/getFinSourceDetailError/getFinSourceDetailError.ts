import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourceDetailError = (state: StateSchema) => state.finSourcesDetail?.error;
