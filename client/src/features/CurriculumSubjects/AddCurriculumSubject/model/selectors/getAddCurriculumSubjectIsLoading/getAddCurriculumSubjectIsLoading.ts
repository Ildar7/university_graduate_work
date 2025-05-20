import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCurriculumSubjectIsLoading = (state: StateSchema) => state.addCurriculumSubject?.isLoading;
