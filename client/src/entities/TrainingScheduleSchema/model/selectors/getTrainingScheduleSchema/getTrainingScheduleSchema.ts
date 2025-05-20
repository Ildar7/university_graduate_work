import { StateSchema } from 'app/providers/StoreProvider';

export const getTrainingScheduleSchemaData = (state: StateSchema) => state.trainingScheduleSchema?.data;
export const getTrainingScheduleSchemaIsLoading = (state: StateSchema) => state.trainingScheduleSchema?.isLoading;
export const getTrainingScheduleSchemaError = (state: StateSchema) => state.trainingScheduleSchema?.error;
