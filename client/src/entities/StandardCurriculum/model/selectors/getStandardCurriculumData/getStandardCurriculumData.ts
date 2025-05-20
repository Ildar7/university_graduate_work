import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumData = (state: StateSchema) => state.standardCurriculum?.data;
