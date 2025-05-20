import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduModuleNewFieldsData = (state: StateSchema) => state.editEduModule?.newFields;
