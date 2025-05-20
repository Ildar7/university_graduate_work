import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleDetailData = (state: StateSchema) => state.subjectsScheduleDetail?.subjectsScheduleDetail.data;
export const getSubjectsScheduleDetailDataToWork = (state: StateSchema) => state.subjectsScheduleDetail?.subjectsScheduleDetail.dataToWork;
export const getSubjectsScheduleDetailIsLoading = (state: StateSchema) => state.subjectsScheduleDetail?.subjectsScheduleDetail.isLoading;
export const getSubjectsScheduleDetailError = (state: StateSchema) => state.subjectsScheduleDetail?.subjectsScheduleDetail.error;
