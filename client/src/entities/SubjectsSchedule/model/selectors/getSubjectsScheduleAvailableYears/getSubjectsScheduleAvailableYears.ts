import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleAvailableYearsData = (state: StateSchema) => state.subjectsSchedule?.availableYears.data;
export const getSubjectsScheduleAvailableYearsIsLoading = (state: StateSchema) => state.subjectsSchedule?.availableYears.isLoading;
export const getSubjectsScheduleAvailableYearsError = (state: StateSchema) => state.subjectsSchedule?.availableYears.error;
