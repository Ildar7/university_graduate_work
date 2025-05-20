import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStandardCurriculumIsLoading = (state: StateSchema) => state.addStandardCurriculum?.isLoading;
