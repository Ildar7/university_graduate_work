import { StateSchema } from 'app/providers/StoreProvider';

export const getEditSpecialityNewFieldsData = (state: StateSchema) => state.editSpeciality?.newFields;
