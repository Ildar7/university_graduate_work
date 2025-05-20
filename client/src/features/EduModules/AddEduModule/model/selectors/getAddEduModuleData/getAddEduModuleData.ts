import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduModuleData = (state: StateSchema) => state.addEduModule?.data;
