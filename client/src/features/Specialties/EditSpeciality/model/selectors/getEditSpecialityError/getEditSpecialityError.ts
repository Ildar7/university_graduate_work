import { StateSchema } from 'app/providers/StoreProvider';

export const getEditSpecialityError = (state: StateSchema) => state.editSpeciality?.errors;
