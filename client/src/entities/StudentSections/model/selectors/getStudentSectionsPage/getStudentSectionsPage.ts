import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionsPage = (state: StateSchema) => state.studentSections?.page;
