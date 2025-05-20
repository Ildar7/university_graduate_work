export {
    getEduFormDetailError,
} from './model/selectors/getEduFormDetailError/getEduFormDetailError';
export {
    getEduFormDetailIsLoading,
} from './model/selectors/getEduFormDetailIsLoading/getEduFormDetailIsLoading';
export {
    getEduFormDetailData,
} from './model/selectors/getEduFormDetailData/getEduFormDetailData';
export {
    fetchEduFormDetail,
} from './model/services/fetchEduFormDetail/fetchEduFormDetail';

export { eduFormDetailActions, eduFormDetailReducer } from './model/slice/eduFormDetailSlice';

export { EduFormDetailSchema, EduFormDetailType } from './model/types/eduFormDetail';
