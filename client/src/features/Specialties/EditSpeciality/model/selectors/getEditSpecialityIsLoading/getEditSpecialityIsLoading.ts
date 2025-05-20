import { StateSchema } from 'app/providers/StoreProvider';

export const getEditSpecialityIsLoading = (state: StateSchema) => state.editSpeciality?.isLoading;
