import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPracticeTypeData = (state: StateSchema) => state.editPracticeType?.data;
