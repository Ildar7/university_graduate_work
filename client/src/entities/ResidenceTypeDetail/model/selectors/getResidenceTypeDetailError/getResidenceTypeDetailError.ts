import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypeDetailError = (state: StateSchema) => state.residenceTypeDetail?.error;
