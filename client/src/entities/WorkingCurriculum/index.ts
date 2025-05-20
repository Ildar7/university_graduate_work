export {
    fetchWorkingCurriculum,
} from './model/services/fetchWorkingCurriculum/fetchWorkingCurriculum';
export { workingCurriculumActions, workingCurriculumReducer } from './model/slice/workingCurriculumSlice';
export {
    getWorkingCurriculumData,
    getWorkingCurriculumError,
    getWorkingCurriculumIsLoading,
    getWorkingCurriculumLimit,
    getWorkingCurriculumPage,
} from './model/selectors/getWorkingCurriculum/getWorkingCurriculum';
export { WorkingCurriculumSchema, WorkingCurriculumType, WorkingCurriculumError } from './model/types/workingCurriculum';
export { WorkingCurriculum } from './ui/WorkingCurriculum';
