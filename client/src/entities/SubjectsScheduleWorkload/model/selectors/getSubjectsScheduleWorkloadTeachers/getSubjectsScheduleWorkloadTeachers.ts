import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleWorkloadTeachersData = (state: StateSchema) => state.subjectsScheduleWorkload?.teachers.data;
export const getSubjectsScheduleWorkloadTeachersDataToWork = (state: StateSchema) => state.subjectsScheduleWorkload?.teachers.dataToWork;
export const getSubjectsScheduleWorkloadTeachersIsLoading = (state: StateSchema) => state.subjectsScheduleWorkload?.teachers.isLoading;
export const getSubjectsScheduleWorkloadTeachersError = (state: StateSchema) => state.subjectsScheduleWorkload?.teachers.error;
