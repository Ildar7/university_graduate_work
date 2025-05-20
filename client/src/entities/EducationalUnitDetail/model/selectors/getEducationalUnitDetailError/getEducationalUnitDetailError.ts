import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalUnitDetailError = (state: StateSchema) => state.eduUnitDetail?.error;
