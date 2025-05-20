import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStandardCurriculumData = (state: StateSchema) => state.editStandardCurriculum?.data;
