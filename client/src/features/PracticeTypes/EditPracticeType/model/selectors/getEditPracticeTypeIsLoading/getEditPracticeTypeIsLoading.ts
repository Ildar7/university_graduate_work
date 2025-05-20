import { StateSchema } from 'app/providers/StoreProvider';

export const getEditPracticeTypeIsLoading = (state: StateSchema) => state.editPracticeType?.isLoading;
