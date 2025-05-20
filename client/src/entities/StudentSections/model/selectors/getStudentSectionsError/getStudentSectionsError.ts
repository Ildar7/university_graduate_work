import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionsError = (state: StateSchema) => state.studentSections?.error;
