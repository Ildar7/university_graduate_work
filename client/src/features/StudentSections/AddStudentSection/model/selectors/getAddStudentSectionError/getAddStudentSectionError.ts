import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentSectionError = (state: StateSchema) => state.addStudentSection?.errors;
