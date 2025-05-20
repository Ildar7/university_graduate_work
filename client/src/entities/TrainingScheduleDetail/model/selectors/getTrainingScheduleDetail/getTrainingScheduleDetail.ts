import { StateSchema } from 'app/providers/StoreProvider';

export const getTrainingScheduleDetailData = (state: StateSchema) => state.trainingScheduleDetail?.data;
export const getTrainingScheduleDetailDataParsed = (state: StateSchema) => state.trainingScheduleDetail?.dataParsed;
export const getTrainingScheduleDetailError = (state: StateSchema) => state.trainingScheduleDetail?.error;
export const getTrainingScheduleDetailIsLoading = (state: StateSchema) => state.trainingScheduleDetail?.isLoading;
