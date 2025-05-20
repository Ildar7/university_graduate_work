import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialtiesPage = (state: StateSchema) => state.specialties?.page;
