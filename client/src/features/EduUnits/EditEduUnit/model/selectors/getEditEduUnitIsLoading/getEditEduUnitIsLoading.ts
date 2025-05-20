import { StateSchema } from 'app/providers/StoreProvider';

export const getEditEduUnitIsLoading = (state: StateSchema) => state.editEduUnit?.isLoading;
