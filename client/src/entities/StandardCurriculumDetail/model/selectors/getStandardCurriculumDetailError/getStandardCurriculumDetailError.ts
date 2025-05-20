import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumDetailError = (state: StateSchema) => state.standardCurriculumDetail?.error;
