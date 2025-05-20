export { getSubjectsScheduleDetailDataToWork } from './model/selectors/getSubjectsScheduleDetail/getSubjectsScheduleDetail';
export { fetchSubjectsScheduleDetailStudentsGroups } from './model/services/fetchSubjectsScheduleDetailStudentsGroups/fetchSubjectsScheduleDetailStudentsGroups';
export { getSubjectsScheduleClassTimeData } from './model/selectors/getSubjectsScheduleClassTime/getSubjectsScheduleClassTime';
export { getSubjectsScheduleStudentsGroupsData } from './model/selectors/getSubjectsScheduleStudentsGroups/getSubjectsScheduleStudentsGroups';

export {
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroups,
    SubjectsScheduleDetailWeekDayDetail,
} from './model/types/subjectsScheduleDetail';
export {
    SubjectsScheduleDetailStudentsGroupsTeachers,
} from './model/types/subjectsScheduleDetailStudentsGroups';
export { fetchSubjectsScheduleDetail } from './model/services/fetchSubjectsScheduleDetail/fetchSubjectsScheduleDetail';
export { subjectsScheduleDetailActions, subjectsScheduleDetailReducer } from './model/slice/subjectsScheduleDetailSlice';
export { SubjectsScheduleDetailSchema } from './model/types/subjectsScheduleDetailSchema';
export { SubjectsScheduleDetailClassTimeData } from './model/types/subjectsScheduleDetailClassTime';
export { SubjectsScheduleDetail } from './ui/SubjectsScheduleDetail/SubjectsScheduleDetail';
