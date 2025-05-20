import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStandardCurriculumErrors = (state: StateSchema) => state.editStandardCurriculum?.errors;
