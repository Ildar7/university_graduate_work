export { SubjectsScheduleDetailAddSubject } from './ui/SubjectsScheduleDetailAddSubject/SubjectsScheduleDetailAddSubject';
export {
    SubjectsScheduleDetailEditSubject,
} from './ui/SubjectsScheduleDetailEditSubject/SubjectsScheduleDetailEditSubject';

export {
    getSubjectsScheduleDetailActions,
    getSubjectsScheduleDetailActionsError,
    getSubjectsScheduleDetailActionsIsLoading,
    getSubjectsScheduleDetailActionsUpdated,
} from './model/selectors/getSubjectsScheduleDetailActions/getSubjectsScheduleDetailActions';

export {
    subjectsScheduleDetailActionsActions,
    subjectsScheduleDetailActionsReducer,
} from './model/slice/subjectsScheduleDetailActionsSlice';

export {
    SubjectsScheduleDetailActionsSchema,
} from './model/types/subjectsScheduleDetailActions';
