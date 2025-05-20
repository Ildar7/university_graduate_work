import { StateSchema } from 'app/providers/StoreProvider';

export const getEduActivitiesTypesData = (state: StateSchema) => state.eduActivitiesTypes?.data;
export const getEduActivitiesTypesError = (state: StateSchema) => state.eduActivitiesTypes?.error;
export const getEduActivitiesTypesIsLoading = (state: StateSchema) => state.eduActivitiesTypes?.isLoading;
