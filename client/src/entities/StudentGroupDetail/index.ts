export {
    getStudentGroupDetailError,
    getStudentGroupDetailData,
    getStudentGroupDetailIsLoading,
} from './model/selectors/getStudentGroupDetail/getStudentGroupDetail';

export {
    studentGroupDetailActions, studentGroupDetailReducer,
} from './model/slice/studentGroupDetailSlice';

export {
    fetchStudentGroupDetail,
} from './model/services/fetchStudentGroupDetail/fetchStudentGroupDetail';

export { StudentGroupDetailSchema } from './model/types/studentGroupDetail';
