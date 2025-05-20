export {
    fetchSubjectsScheduleAvailableYears,
} from './model/services/fetchSubjectsScheduleAvailableYears/fetchSubjectsScheduleAvailableYears';
export { SubjectsSchedule } from './ui/SubjectsSchedule/SubjectsSchedule';
export { subjectsScheduleActions, subjectsScheduleReducer } from './model/slice/subjectsScheduleSlice';
export { SubjectsScheduleSchema } from './model/types/subjectsSchedule';
export {
    getSubjectsScheduleAvailableYearsData,
    getSubjectsScheduleAvailableYearsError,
    getSubjectsScheduleAvailableYearsIsLoading,
} from './model/selectors/getSubjectsScheduleAvailableYears/getSubjectsScheduleAvailableYears';
