import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleDetailActions = (state: StateSchema) => state.subjectsScheduleDetailActions?.actions;
export const getSubjectsScheduleDetailActionsUpdated = (state: StateSchema) => state.subjectsScheduleDetailActions?.updated;
export const getSubjectsScheduleDetailActionsIsLoading = (state: StateSchema) => state.subjectsScheduleDetailActions?.isLoading;
export const getSubjectsScheduleDetailActionsError = (state: StateSchema) => state.subjectsScheduleDetailActions?.error;

export const getSubjectsScheduleDetailActionsCreatingFields = (state: StateSchema) => state.subjectsScheduleDetailActions?.creating;
export const getSubjectsScheduleDetailActionsUpdatingFields = (state: StateSchema) => state.subjectsScheduleDetailActions?.updating;
