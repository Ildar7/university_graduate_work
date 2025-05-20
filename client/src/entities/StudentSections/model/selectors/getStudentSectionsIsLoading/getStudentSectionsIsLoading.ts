import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionsIsLoading = (state: StateSchema) => state.studentSections?.isLoading;
