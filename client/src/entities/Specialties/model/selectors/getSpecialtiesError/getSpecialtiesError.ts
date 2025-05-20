import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialtiesError = (state: StateSchema) => state.specialties?.error;
