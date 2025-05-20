export {
    getTrainingScheduleData,
    getTrainingScheduleError,
    getTrainingScheduleIsLoading,
} from './model/selectors/getTrainingSchedule/getTrainingSchedule';

export { fetchTrainingSchedule } from './model/services/fetchTrainingSchedule/fetchTrainingSchedule';

export { trainingScheduleActions, trainingScheduleReducer } from './model/slice/trainingScheduleSlice';

export { TrainingSchedule } from './ui/TrainingSchedule';

export { TrainingScheduleSchema, TrainingScheduleType } from './model/types/trainingSchedule';
