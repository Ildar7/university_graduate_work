export {
    getPracticeTypeDetailError,
} from './model/selectors/getPracticeTypeDetailError/getPracticeTypeDetailError';
export {
    getPracticeTypeDetailIsLoading,
} from './model/selectors/getPracticeTypeDetailIsLoading/getPracticeTypeDetailIsLoading';
export {
    getPracticeTypeDetailData,
} from './model/selectors/getPracticeTypeDetailData/getPracticeTypeDetailData';
export {
    fetchPracticeTypeDetail,
} from './model/services/fetchPracticeTypeDetail/fetchPracticeTypeDetail';

export { practiceTypeDetailActions, practiceTypeDetailReducer } from './model/slice/practiceTypeDetailSlice';

export { PracticeTypeDetailSchema, PracticeTypeDetailType } from './model/types/practiceTypeDetail';
