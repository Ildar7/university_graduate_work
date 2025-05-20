import { StateSchema } from 'app/providers/StoreProvider';

export const getEditResidenceTypeNewFieldsData = (state: StateSchema) => state.editResidenceType?.newFields?.title;
