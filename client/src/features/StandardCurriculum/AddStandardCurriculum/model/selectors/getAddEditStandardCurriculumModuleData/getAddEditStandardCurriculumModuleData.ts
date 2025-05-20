import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEditStandardCurriculumModuleData = (state: StateSchema) => state.addStandardCurriculum?.editModuleModalData;
