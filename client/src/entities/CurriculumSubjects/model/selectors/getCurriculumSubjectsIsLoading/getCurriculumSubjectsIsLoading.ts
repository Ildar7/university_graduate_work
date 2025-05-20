import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsIsLoading = (state: StateSchema) => state.curriculumSubjects?.isLoading;
