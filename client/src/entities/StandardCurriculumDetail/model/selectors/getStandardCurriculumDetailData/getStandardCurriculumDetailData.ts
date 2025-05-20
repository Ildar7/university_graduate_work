import { StateSchema } from 'app/providers/StoreProvider';

export const getStandardCurriculumDetailData = (state: StateSchema) => state.standardCurriculumDetail?.data;
