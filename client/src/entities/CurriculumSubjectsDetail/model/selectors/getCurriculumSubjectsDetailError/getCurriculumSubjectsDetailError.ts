import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsDetailError = (state: StateSchema) => state.curriculumSubjectsDetail?.error;
