import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormDetailError = (state: StateSchema) => state.eduFormDetail?.error;
