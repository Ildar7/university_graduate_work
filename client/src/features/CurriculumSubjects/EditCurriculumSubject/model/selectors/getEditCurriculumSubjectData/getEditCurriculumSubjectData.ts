import { StateSchema } from 'app/providers/StoreProvider';

export const getEditCurriculumSubjectData = (state: StateSchema) => state.editCurriculumSubject?.data;
