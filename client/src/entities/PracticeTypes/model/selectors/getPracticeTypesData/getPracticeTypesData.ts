import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypesData = (state: StateSchema) => state.practiceTypes?.data;
