import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsData = (state: StateSchema) => state.curriculumSubjects?.data;
