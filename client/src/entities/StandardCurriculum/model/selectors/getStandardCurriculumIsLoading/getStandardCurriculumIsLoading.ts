import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumIsLoading = (state: StateSchema) => state.standardCurriculum?.isLoading;
