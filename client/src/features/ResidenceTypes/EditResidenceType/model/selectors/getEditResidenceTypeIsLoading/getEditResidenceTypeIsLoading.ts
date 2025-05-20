import { StateSchema } from 'app/providers/StoreProvider';

export const getEditResidenceTypeIsLoading = (state: StateSchema) => state.editResidenceType?.isLoading;
