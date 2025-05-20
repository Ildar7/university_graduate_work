import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleStudentsGroupsData = (state: StateSchema) => state.subjectsScheduleDetail?.studentsGroups.data;
export const getSubjectsScheduleStudentsGroupsIsLoading = (state: StateSchema) => state.subjectsScheduleDetail?.studentsGroups.isLoading;
export const getSubjectsScheduleStudentsGroupsError = (state: StateSchema) => state.subjectsScheduleDetail?.studentsGroups.error;
