import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduFormNewFieldsData = (state: StateSchema) => state.editEduForm?.newFields?.title;
