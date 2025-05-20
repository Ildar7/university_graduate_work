import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationBasesData = (state: StateSchema) => state.educationBases?.data;
export const getEducationBasesError = (state: StateSchema) => state.educationBases?.error;
export const getEducationBasesIsLoading = (state: StateSchema) => state.educationBases?.isLoading;
