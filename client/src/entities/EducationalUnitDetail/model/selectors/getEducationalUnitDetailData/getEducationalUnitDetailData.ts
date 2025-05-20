import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalUnitDetailData = (state: StateSchema) => state.eduUnitDetail?.data;
