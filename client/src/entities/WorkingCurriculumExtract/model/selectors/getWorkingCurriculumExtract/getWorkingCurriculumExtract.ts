import { StateSchema } from 'app/providers/StoreProvider';

// Fetched Selectors Start ----
export const getWorkingCurriculumExtractData = (state: StateSchema) => state.workingCurriculumExtract?.data;
export const getWorkingCurriculumExtractDataParsed = (state: StateSchema) => state.workingCurriculumExtract?.dataParsed;
export const getWorkingCurriculumExtractDataToWork = (state: StateSchema) => state.workingCurriculumExtract?.dataToWork;
export const getWorkingCurriculumExtractIsLoading = (state: StateSchema) => state.workingCurriculumExtract?.isLoading;
export const getWorkingCurriculumExtractError = (state: StateSchema) => state.workingCurriculumExtract?.error;

// Fetched Selectors End ------

// Updating Selectors start ----
export const getWorkingCurriculumExtractActions = (state: StateSchema) => state.workingCurriculumExtract?.actions;
export const getWorkingCurriculumExtractUpdatingError = (state: StateSchema) => state.workingCurriculumExtract?.updatingError;
export const getWorkingCurriculumExtractUpdatingIsLoading = (state: StateSchema) => state.workingCurriculumExtract?.updatingIsLoading;
export const getWorkingCurriculumExtractValidationErrors = (state: StateSchema) => state.workingCurriculumExtract?.validationErrors;
export const getWorkingCurriculumExtractFormWithErrors = (state: StateSchema) => state.workingCurriculumExtract?.formWithErrors;
// Updating Selectors end ----

// Updating Semester distribution selectors start ---
export const getWorkingCurriculumExtractDistributionActions = (state: StateSchema) => state.workingCurriculumExtract?.distributionActions;
// Updating Semester distribution selectors end ---

export const getWorkingCurriculumExtractReadOnly = (state: StateSchema) => state.workingCurriculumExtract?.readOnly;
export const getWorkingCurriculumExtractRedirectToMainPage = (state: StateSchema) => state.workingCurriculumExtract?.redirectToMainPage;
export const getWorkingCurriculumExtractShowAllDisciplines = (state: StateSchema) => state.workingCurriculumExtract?.showAllDisciplines;
