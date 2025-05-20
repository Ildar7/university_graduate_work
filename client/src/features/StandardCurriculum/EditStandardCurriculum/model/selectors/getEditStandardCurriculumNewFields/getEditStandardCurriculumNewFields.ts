import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStandardCurriculumNewFields = (state: StateSchema) => state.editStandardCurriculum?.newFields;
