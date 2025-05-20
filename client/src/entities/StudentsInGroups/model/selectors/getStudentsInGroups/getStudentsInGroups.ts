import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentsInGroupsMovingData = (state: StateSchema) => state.studentsInGroups?.create;
export const getStudentsInGroupsDeletingData = (state: StateSchema) => state.studentsInGroups?.delete;
export const getStudentsInGroupsIsLoading = (state: StateSchema) => state.studentsInGroups?.isLoading;
export const getStudentsInGroupsError = (state: StateSchema) => state.studentsInGroups?.error;
export const getStudentsInGroupsDataFrom = (state: StateSchema) => state.studentsInGroups?.dataFrom;
export const getStudentsInGroupsDataTo = (state: StateSchema) => state.studentsInGroups?.dataTo;
