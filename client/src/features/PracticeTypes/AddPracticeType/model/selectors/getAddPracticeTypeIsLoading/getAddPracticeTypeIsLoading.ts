import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPracticeTypeIsLoading = (state: StateSchema) => state.addPracticeType?.isLoading;
