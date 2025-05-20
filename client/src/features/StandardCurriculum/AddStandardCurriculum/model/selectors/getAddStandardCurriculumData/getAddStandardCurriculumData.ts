import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStandardCurriculumData = (state: StateSchema) => state.addStandardCurriculum?.data;
