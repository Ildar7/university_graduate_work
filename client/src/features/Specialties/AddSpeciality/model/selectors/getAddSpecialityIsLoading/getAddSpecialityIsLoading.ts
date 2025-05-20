import { StateSchema } from 'app/providers/StoreProvider';

export const getAddSpecialityIsLoading = (state: StateSchema) => state.addSpeciality?.isLoading;
