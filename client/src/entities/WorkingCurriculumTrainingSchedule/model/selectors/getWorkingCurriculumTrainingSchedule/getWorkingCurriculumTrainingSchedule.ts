import { StateSchema } from 'app/providers/StoreProvider';

export const getWorkingCurriculumTrainingScheduleData = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.data;
export const getWorkingCurriculumTrainingScheduleDataParsed = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.dataParsed;
export const getWorkingCurriculumTrainingScheduleEditData = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.editData;
export const getWorkingCurriculumTrainingScheduleProfessionalModules = (state: StateSchema) => state
    .workingCurriculumTrainingSchedule?.professionalModules;
export const getWorkingCurriculumTrainingScheduleSymbols = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.symbols;
export const getWorkingCurriculumTrainingScheduleSelectedCells = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.selectedCells;
export const getWorkingCurriculumTrainingScheduleCreateData = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.createAction;
export const getWorkingCurriculumTrainingScheduleEditDataInfo = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.editActions;
export const getWorkingCurriculumTrainingScheduleError = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.error;
export const getWorkingCurriculumTrainingScheduleIsLoading = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.isLoading;
export const getWorkingCurriculumTrainingScheduleReadOnly = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.readOnly;
export const getWorkingCurriculumTrainingScheduleRedirectToMainPage = (state: StateSchema) => state.workingCurriculumTrainingSchedule?.redirectToMainPage;
