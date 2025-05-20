import { StateSchema } from 'app/providers/StoreProvider';

export const getEditCurriculumSubjectNewFieldsData = (state: StateSchema) => state.editCurriculumSubject?.newFields;
