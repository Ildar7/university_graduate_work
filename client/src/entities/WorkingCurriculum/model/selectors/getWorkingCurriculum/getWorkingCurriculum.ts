import { StateSchema } from 'app/providers/StoreProvider';

export const getWorkingCurriculumData = (state: StateSchema) => state.workingCurriculum?.data;
export const getWorkingCurriculumIsLoading = (state: StateSchema) => state.workingCurriculum?.isLoading;
export const getWorkingCurriculumError = (state: StateSchema) => state.workingCurriculum?.error;
export const getWorkingCurriculumPage = (state: StateSchema) => state.workingCurriculum?.page;
export const getWorkingCurriculumLimit = (state: StateSchema) => state.workingCurriculum?.limit;
