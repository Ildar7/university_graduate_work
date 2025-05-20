import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPracticeTypeError = (state: StateSchema) => state.addPracticeType?.errors;
