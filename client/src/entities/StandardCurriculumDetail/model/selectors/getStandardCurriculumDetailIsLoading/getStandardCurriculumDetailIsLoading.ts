import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumDetailIsLoading = (state: StateSchema) => state.standardCurriculumDetail?.isLoading;
