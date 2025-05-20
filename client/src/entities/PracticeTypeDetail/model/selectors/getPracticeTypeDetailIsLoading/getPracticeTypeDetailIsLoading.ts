import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypeDetailIsLoading = (state: StateSchema) => state.practiceTypeDetail?.isLoading;
