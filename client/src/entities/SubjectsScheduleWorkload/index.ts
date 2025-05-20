export { fetchSubjectsScheduleWorkloadTeachers } from './model/services/fetchSubjectsScheduleWorkloadTeachers/fetchSubjectsScheduleWorkloadTeachers';
export {
    fetchSubjectsScheduleWorkloadClassRooms,
} from './model/services/fetchSubjectsScheduleWorkloadClassRooms/fetchSubjectsScheduleWorkloadClassRooms';

export {
    getSubjectsScheduleWorkloadClassRoomsDataToWork,
    getSubjectsScheduleWorkloadClassRoomsIsLoading,
    getSubjectsScheduleWorkloadClassRoomsError,
} from './model/selectors/getSubjectsScheduleWorkloadClassRooms/getSubjectsScheduleWorkloadClassRooms';

export {
    getSubjectsScheduleWorkloadTeachersError,
    getSubjectsScheduleWorkloadTeachersIsLoading,
    getSubjectsScheduleWorkloadTeachersDataToWork,
} from './model/selectors/getSubjectsScheduleWorkloadTeachers/getSubjectsScheduleWorkloadTeachers';

export { subjectsScheduleWorkloadActions, subjectsScheduleWorkloadReducer } from './model/slice/subjectsScheduleWorkloadSlice';

export {
    SubjectsScheduleWorkloadSchema,
    SubjectsScheduleWorkloadClassTime,
} from './model/types/subjectsScheduleWorkloadSchema';

export { SubjectsScheduleWorkload } from './ui/SubjectsScheduleWorkload/SubjectsScheduleWorkload';
