import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialtiesIsLoading = (state: StateSchema) => state.specialties?.isLoading;
