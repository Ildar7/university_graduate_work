import { StateSchema } from 'app/providers/StoreProvider';

export const getModulesToDelete = (state: StateSchema) => state.editStandardCurriculum?.modulesToDelete;
