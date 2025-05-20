import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleData = (state: StateSchema) => state.subjectsSchedule?.list.data;
export const getSubjectsScheduleIsLoading = (state: StateSchema) => state.subjectsSchedule?.list.isLoading;
export const getSubjectsScheduleError = (state: StateSchema) => state.subjectsSchedule?.list.error;
