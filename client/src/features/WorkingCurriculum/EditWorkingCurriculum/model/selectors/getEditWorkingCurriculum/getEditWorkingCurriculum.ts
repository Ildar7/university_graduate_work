import { StateSchema } from 'app/providers/StoreProvider';

export const getEditWorkingCurriculumData = (state: StateSchema) => state.editWorkingCurriculum?.data;
export const getEditWorkingCurriculumErrors = (state: StateSchema) => state.editWorkingCurriculum?.errors;
export const getEditWorkingCurriculumIsLoading = (state: StateSchema) => state.editWorkingCurriculum?.isLoading;
export const getEditWorkingCurriculumNewFields = (state: StateSchema) => state.editWorkingCurriculum?.newFields;
