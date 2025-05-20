import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPracticeTypeError = (state: StateSchema) => state.editPracticeType?.errors;
