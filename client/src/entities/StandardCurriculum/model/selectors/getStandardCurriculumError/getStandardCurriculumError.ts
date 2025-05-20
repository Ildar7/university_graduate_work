import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumError = (state: StateSchema) => state.standardCurriculum?.error;
