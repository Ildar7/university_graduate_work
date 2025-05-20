import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleWorkloadClassRoomsData = (state: StateSchema) => state.subjectsScheduleWorkload?.classRooms.data;
export const getSubjectsScheduleWorkloadClassRoomsDataToWork = (state: StateSchema) => state.subjectsScheduleWorkload?.classRooms.dataToWork;
export const getSubjectsScheduleWorkloadClassRoomsIsLoading = (state: StateSchema) => state.subjectsScheduleWorkload?.classRooms.isLoading;
export const getSubjectsScheduleWorkloadClassRoomsError = (state: StateSchema) => state.subjectsScheduleWorkload?.classRooms.error;
