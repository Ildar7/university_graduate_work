import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialtiesLimit = (state: StateSchema) => state.specialties?.limit;
