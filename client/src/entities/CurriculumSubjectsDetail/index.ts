export {
    getCurriculumSubjectsDetailData,
} from './model/selectors/getCurriculumSubjectsDetailData/getCurriculumSubjectsDetailData';
export {
    getCurriculumSubjectsDetailError,
} from './model/selectors/getCurriculumSubjectsDetailError/getCurriculumSubjectsDetailError';
export {
    getCurriculumSubjectsDetailIsLoading,
} from './model/selectors/getCurriculumSubjectsDetailIsLoading/getCurriculumSubjectsDetailIsLoading';

export {
    fetchCurriculumSubjectsDetail,
} from './model/services/fetchCurriculumSubjectsDetail/fetchCurriculumSubjectsDetail';

export { curriculumSubjectsDetailActions, curriculumSubjectsDetailReducer } from './model/slice/curriculumSubjectsDetailSlice';

export { CurriculumSubjectsDetailSchema, CurriculumSubjectsDetailType } from './model/types/curriculumSubjectsDetail';
