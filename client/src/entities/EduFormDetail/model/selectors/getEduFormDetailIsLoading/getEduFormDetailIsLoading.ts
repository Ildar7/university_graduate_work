import { StateSchema } from 'app/providers/StoreProvider';

export const getEduFormDetailIsLoading = (state: StateSchema) => state.eduFormDetail?.isLoading;
