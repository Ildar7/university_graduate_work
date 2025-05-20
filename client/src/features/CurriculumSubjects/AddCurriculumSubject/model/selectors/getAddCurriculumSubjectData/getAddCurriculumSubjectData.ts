import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCurriculumSubjectData = (state: StateSchema) => state.addCurriculumSubject?.data;
