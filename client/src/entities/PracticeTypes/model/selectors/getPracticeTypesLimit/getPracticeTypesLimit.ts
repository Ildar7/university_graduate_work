import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypesLimit = (state: StateSchema) => state.practiceTypes?.limit;
