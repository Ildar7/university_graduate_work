export {
    getStudentSectionDetailError,
} from './model/selectors/getStudentSectionDetailError/getStudentSectionDetailError';
export {
    getStudentSectionDetailIsLoading,
} from './model/selectors/getStudentSectionDetailIsLoading/getStudentSectionDetailIsLoading';
export {
    getStudentSectionDetailData,
} from './model/selectors/getStudentSectionDetailData/getStudentSectionDetailData';
export {
    fetchStudentSectionDetail,
} from './model/services/fetchStudentSectionDetail/fetchStudentSectionDetail';

export { studentSectionDetailActions, studentSectionDetailReducer } from './model/slice/studentSectionDetailSlice';

export { StudentSectionDetailSchema, StudentSectionDetailType } from './model/types/studentSectionDetail';
