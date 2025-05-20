export {
    getStudentClubDetailError,
} from './model/selectors/getStudentClubDetailError/getStudentClubDetailError';
export {
    getStudentClubDetailIsLoading,
} from './model/selectors/getStudentClubDetailIsLoading/getStudentClubDetailIsLoading';
export {
    getStudentClubDetailData,
} from './model/selectors/getStudentClubDetailData/getStudentClubDetailData';
export {
    fetchStudentClubDetail,
} from './model/services/fetchStudentClubDetail/fetchStudentClubDetail';

export { studentClubDetailActions, studentClubDetailReducer } from './model/slice/studentClubDetailSlice';

export { StudentClubDetailSchema, StudentClubDetailType } from './model/types/studentClubDetail';
