import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypesIsLoading = (state: StateSchema) => state.residenceTypes?.isLoading;
