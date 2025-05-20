export {
    getStudentGroupsData,
    getStudentGroupsError,
    getStudentGroupsIsLoading,
} from './model/selectors/getStudentGroups/getStudentGroups';

export { fetchStudentGroups } from './model/services/fetchStudentGroups/fetchStudentGroups';

export { studentGroupsReducer, studentGroupsActions } from './model/slice/studentGroupsSlice';

export { StudentGroups } from './ui/StudentGroups/StudentGroups';

export {
    StudentGroupsType, StudentGroupsError, StudentGroupsSchema, StudentGroupsInterface,
} from './model/types/studentGroups';
