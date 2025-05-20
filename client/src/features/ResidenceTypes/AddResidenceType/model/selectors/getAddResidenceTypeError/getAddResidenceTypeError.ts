import { StateSchema } from 'app/providers/StoreProvider';

export const getAddResidenceTypeError = (state: StateSchema) => state.addResidenceType?.errors;
