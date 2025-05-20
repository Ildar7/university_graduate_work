export {
    getWorkingCurriculumDetailData,
    getWorkingCurriculumDetailError,
    getWorkingCurriculumDetailIsLoading,
} from './model/selectors/getWorkingCurriculumDetail/getWorkingCurriculumDetail';

export {
    workingCurriculumDetailActions, workingCurriculumDetailReducer,
} from './model/slice/workingCurriculumDetailSlice';

export {
    fetchWorkingCurriculumDetail,
} from './model/services/fetchWorkingCurriculumDetail/fetchWorkingCurriculumDetail';

export { WorkingCurriculumDetailSchema } from './model/types/workingCurriculumDetail';
