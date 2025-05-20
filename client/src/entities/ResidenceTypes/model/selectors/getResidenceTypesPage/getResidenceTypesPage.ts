import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypesPage = (state: StateSchema) => state.residenceTypes?.page;
