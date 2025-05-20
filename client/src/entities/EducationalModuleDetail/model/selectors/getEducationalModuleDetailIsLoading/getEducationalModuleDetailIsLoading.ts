import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalModuleDetailIsLoading = (state: StateSchema) => state.eduModuleDetail?.isLoading;
