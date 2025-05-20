import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormDetailData = (state: StateSchema) => state.eduFormDetail?.data;
