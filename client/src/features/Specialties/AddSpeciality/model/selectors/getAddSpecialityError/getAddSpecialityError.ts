import { StateSchema } from 'app/providers/StoreProvider';

export const getAddSpecialityError = (state: StateSchema) => state.addSpeciality?.errors;
