import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStandardCurriculumErrors = (state: StateSchema) => state.addStandardCurriculum?.errors;
