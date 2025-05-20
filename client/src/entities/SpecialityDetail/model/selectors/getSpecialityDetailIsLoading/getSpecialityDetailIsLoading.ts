import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialityDetailIsLoading = (state: StateSchema) => state.specialityDetail?.isLoading;
