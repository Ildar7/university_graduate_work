import { StateSchema } from 'app/providers/StoreProvider';

export const getCurriculumSubjectsDetailData = (state: StateSchema) => state.curriculumSubjectsDetail?.data;
