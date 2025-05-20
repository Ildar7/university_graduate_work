import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentSectionError = (state: StateSchema) => state.editStudentSection?.errors;
