import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduUnitIsLoading = (state: StateSchema) => state.addEduUnit?.isLoading;
