export { studyDurationDetailReducer, studyDurationDetailActions } from './model/slice/studyDurationDetailSlice';

export {
    getStudyDurationDetailError,
} from './model/selectors/getStudyDurationDetailError/getStudyDurationDetailError';
export {
    getStudyDurationDetailIsLoading,
} from './model/selectors/getStudyDurationDetailIsLoading/getStudyDurationDetailIsLoading';
export {
    getStudyDurationDetailData,
} from './model/selectors/getStudyDurationDetailData/getStudyDurationDetailData';
export {
    fetchStudyDurationDetail,
} from './model/services/fetchStudyDurationDetail/fetchStudyDurationDetail';

export { StudyDurationDetailSchema, StudyDurationDetailType } from './model/types/studyDurationDetail';
