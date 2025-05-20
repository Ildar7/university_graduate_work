import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypeDetailData = (state: StateSchema) => state.practiceTypeDetail?.data;
