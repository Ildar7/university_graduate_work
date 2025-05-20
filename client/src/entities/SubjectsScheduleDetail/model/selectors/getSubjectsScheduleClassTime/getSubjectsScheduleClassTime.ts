import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleClassTimeData = (state: StateSchema) => state.subjectsScheduleDetail?.classTime.data;
export const getSubjectsScheduleClassTimeIsLoading = (state: StateSchema) => state.subjectsScheduleDetail?.classTime.isLoading;
export const getSubjectsScheduleClassTimeError = (state: StateSchema) => state.subjectsScheduleDetail?.classTime.error;
