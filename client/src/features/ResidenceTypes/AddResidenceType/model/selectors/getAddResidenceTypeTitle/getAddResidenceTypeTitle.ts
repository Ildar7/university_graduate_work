import { StateSchema } from 'app/providers/StoreProvider';

export const getAddResidenceTypeTitle = (state: StateSchema) => state.addResidenceType?.data.title;
