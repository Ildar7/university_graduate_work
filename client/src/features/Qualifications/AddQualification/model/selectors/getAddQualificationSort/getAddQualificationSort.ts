import { StateSchema } from 'app/providers/StoreProvider';

export const getAddQualificationSort = (state: StateSchema) => state.addQualification?.data.sort;
