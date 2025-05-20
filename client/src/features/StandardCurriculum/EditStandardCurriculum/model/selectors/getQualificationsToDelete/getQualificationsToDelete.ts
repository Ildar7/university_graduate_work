import { StateSchema } from 'app/providers/StoreProvider';

export const getQualificationsToDelete = (state: StateSchema) => state.editStandardCurriculum?.qualificationsToDelete;
