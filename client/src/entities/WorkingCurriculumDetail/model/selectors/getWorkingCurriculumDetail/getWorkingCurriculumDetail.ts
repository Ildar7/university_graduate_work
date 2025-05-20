import { StateSchema } from 'app/providers/StoreProvider';

export const getWorkingCurriculumDetailData = (state: StateSchema) => state.workingCurriculumDetail?.data;
export const getWorkingCurriculumDetailIsLoading = (state: StateSchema) => state.workingCurriculumDetail?.isLoading;
export const getWorkingCurriculumDetailError = (state: StateSchema) => state.workingCurriculumDetail?.error;
