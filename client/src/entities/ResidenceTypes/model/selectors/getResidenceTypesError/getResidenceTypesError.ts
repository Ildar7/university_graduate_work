import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypesError = (state: StateSchema) => state.residenceTypes?.error;
