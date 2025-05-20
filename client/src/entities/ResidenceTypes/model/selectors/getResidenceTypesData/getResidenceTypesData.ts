import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypesData = (state: StateSchema) => state.residenceTypes?.data;
