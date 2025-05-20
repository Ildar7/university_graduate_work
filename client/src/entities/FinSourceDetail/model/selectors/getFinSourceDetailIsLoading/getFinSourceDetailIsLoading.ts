import { StateSchema } from 'app/providers/StoreProvider';

export const getFinSourceDetailIsLoading = (state: StateSchema) => state.finSourcesDetail?.isLoading;
