import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypesPage = (state: StateSchema) => state.practiceTypes?.page;
