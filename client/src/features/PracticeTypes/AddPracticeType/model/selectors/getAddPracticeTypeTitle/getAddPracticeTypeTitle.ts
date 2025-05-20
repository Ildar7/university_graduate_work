import { StateSchema } from 'app/providers/StoreProvider';

export const getAddPracticeTypeTitle = (state: StateSchema) => state.addPracticeType?.data.title;
