import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsDetailIsLoading = (state: StateSchema) => state.curriculumSubjectsDetail?.isLoading;
