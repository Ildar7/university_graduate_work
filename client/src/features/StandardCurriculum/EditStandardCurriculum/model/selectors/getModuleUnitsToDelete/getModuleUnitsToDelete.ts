import { StateSchema } from 'app/providers/StoreProvider';

export const getModuleUnitsToDelete = (state: StateSchema) => state.editStandardCurriculum?.moduleUnitsToDelete;
