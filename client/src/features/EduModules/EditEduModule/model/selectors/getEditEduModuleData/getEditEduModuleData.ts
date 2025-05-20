import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduModuleData = (state: StateSchema) => state.editEduModule?.data;
