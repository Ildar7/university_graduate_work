import { StateSchema } from 'app/providers/StoreProvider';

export const getAddResidenceTypeIsLoading = (state: StateSchema) => state.addResidenceType?.isLoading;
