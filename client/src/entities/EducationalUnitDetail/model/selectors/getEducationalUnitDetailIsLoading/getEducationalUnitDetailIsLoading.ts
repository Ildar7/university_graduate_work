import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalUnitDetailIsLoading = (state: StateSchema) => state.eduUnitDetail?.isLoading;
