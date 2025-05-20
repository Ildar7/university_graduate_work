import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypesLimit = (state: StateSchema) => state.residenceTypes?.limit;
