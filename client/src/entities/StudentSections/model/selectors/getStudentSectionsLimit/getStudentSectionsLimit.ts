import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionsLimit = (state: StateSchema) => state.studentSections?.limit;
