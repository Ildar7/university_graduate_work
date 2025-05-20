import { StateSchema } from 'app/providers/StoreProvider';

export const getResidenceTypeDetailData = (state: StateSchema) => state.residenceTypeDetail?.data;
