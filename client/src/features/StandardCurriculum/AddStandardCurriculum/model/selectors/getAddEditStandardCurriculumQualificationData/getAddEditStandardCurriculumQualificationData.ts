import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEditStandardCurriculumQualificationData = (state: StateSchema) => state.addStandardCurriculum?.editQualificationModalData;
