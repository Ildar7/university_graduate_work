import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsError = (state: StateSchema) => state.curriculumSubjects?.error;
