import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentSectionIsLoading = (state: StateSchema) => state.addStudentSection?.isLoading;
