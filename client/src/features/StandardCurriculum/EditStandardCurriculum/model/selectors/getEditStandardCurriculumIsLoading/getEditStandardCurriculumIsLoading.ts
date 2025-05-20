import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStandardCurriculumIsLoading = (state: StateSchema) => state.editStandardCurriculum?.isLoading;
