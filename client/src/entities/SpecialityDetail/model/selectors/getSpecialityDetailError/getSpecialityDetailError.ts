import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialityDetailError = (state: StateSchema) => state.specialityDetail?.error;
