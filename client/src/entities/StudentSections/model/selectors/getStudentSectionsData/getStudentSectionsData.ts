import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionsData = (state: StateSchema) => state.studentSections?.data;
