import { StateSchema } from 'app/providers/StoreProvider';

export const getEditResidenceTypeError = (state: StateSchema) => state.editResidenceType?.errors;
