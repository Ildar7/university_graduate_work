import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduUnitNewFieldsData = (state: StateSchema) => state.editEduUnit?.newFields;
