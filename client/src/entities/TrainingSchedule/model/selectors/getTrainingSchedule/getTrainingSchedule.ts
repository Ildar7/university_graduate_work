import { StateSchema } from 'app/providers/StoreProvider';

export const getTrainingScheduleData = (state: StateSchema) => state.trainingSchedule?.data;
export const getTrainingScheduleIsLoading = (state: StateSchema) => state.trainingSchedule?.isLoading;
export const getTrainingScheduleError = (state: StateSchema) => state.trainingSchedule?.error;
