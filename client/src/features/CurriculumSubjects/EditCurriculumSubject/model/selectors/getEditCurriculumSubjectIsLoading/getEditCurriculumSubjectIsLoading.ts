import { StateSchema } from 'app/providers/StoreProvider';

export const getEditCurriculumSubjectIsLoading = (state: StateSchema) => state.editCurriculumSubject?.isLoading;
