import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalModuleDetailError = (state: StateSchema) => state.eduModuleDetail?.error;
