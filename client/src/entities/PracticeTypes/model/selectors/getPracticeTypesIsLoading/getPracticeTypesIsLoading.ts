import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypesIsLoading = (state: StateSchema) => state.practiceTypes?.isLoading;
