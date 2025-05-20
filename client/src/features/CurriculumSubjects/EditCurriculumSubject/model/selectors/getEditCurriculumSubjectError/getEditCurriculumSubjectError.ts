import { StateSchema } from 'app/providers/StoreProvider';

export const getEditCurriculumSubjectError = (state: StateSchema) => state.editCurriculumSubject?.errors;
