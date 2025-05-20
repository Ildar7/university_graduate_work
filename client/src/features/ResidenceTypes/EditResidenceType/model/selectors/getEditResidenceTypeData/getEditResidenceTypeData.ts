import { StateSchema } from 'app/providers/StoreProvider';

export const getEditResidenceTypeData = (state: StateSchema) => state.editResidenceType?.data;
