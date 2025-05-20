import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialtiesData = (state: StateSchema) => state.specialties?.data;
