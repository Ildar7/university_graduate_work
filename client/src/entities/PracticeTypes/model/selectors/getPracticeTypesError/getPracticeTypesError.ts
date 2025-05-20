import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypesError = (state: StateSchema) => state.practiceTypes?.error;
