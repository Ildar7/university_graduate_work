export { fetchCurriculumSubjects } from './model/services/fetchCurriculumSubjects/fetchCurriculumSubjects';

export { CurriculumSubjects } from './ui/CurriculumSubjects';

export { getCurriculumSubjectsData } from './model/selectors/getCurriculumSubjectsData/getCurriculumSubjectsData';
export { getCurriculumSubjectsError } from './model/selectors/getCurriculumSubjectsError/getCurriculumSubjectsError';
export {
    getCurriculumSubjectsIsLoading,
} from './model/selectors/getCurriculumSubjectsIsLoading/getCurriculumSubjectsIsLoading';

export { curriculumSubjectsActions, curriculumSubjectsReducer } from './model/slice/curriculumSubjectsSlice';

export {
    CurriculumSubjectsSchema, CurriculumSubjectsData, CurriculumSubjectsError, CurriculumSubjectsType,
} from './model/types/curriculumSubjects';
