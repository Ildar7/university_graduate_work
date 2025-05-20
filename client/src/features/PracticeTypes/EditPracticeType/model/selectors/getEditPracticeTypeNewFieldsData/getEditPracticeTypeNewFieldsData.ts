import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPracticeTypeNewFieldsData = (state: StateSchema) => state.editPracticeType?.newFields?.title;
