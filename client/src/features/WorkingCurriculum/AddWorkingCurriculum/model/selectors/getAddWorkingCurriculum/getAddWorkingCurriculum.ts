import { StateSchema } from 'app/providers/StoreProvider';

export const getAddWorkingCurriculumData = (state: StateSchema) => state.addNewWorkingCurriculum?.data;
export const getAddWorkingCurriculumErrors = (state: StateSchema) => state.addNewWorkingCurriculum?.errors;
export const getAddWorkingCurriculumIsLoading = (state: StateSchema) => state.addNewWorkingCurriculum?.isLoading;
