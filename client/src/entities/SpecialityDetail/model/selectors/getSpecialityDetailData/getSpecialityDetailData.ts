import { StateSchema } from 'app/providers/StoreProvider';

export const getSpecialityDetailData = (state: StateSchema) => state.specialityDetail?.data;
