import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentSectionIsLoading = (state: StateSchema) => state.editStudentSection?.isLoading;
