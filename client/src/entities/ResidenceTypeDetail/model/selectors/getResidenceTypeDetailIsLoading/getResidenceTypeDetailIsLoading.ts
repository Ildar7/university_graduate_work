import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypeDetailIsLoading = (state: StateSchema) => state.residenceTypeDetail?.isLoading;
