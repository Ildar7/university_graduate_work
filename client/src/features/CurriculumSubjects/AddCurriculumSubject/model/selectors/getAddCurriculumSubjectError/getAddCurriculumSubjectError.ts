import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCurriculumSubjectError = (state: StateSchema) => state.addCurriculumSubject?.errors;
