export { fetchStudentClubs } from './model/services/fetchStudentClubs/fetchStudentClubs';

export {
    getStudentClubsLimit,
} from './model/selectors/getStudentClubsLimit/getStudentClubsLimit';
export {
    getStudentClubsPage,
} from './model/selectors/getStudentClubsPage/getStudentClubsPage';

export {
    getStudentClubsData,
} from './model/selectors/getStudentClubsData/getStudentClubsData';
export {
    getStudentClubsIsLoading,
} from './model/selectors/getStudentClubsIsLoading/getStudentClubsIsLoading';
export {
    getStudentClubsError,
} from './model/selectors/getStudentClubsError/getStudentClubsError';

export { studentClubsActions, studentClubsReducer } from './model/slice/studentClubsSlice';

export {
    StudentClubsSchema, StudentClubsData, StudentClubsError, StudentClubsType,
} from './model/types/studentClubs';

export { StudentClubs } from './ui/StudentClubs';
