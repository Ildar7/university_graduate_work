import { StateSchema } from 'app/providers/StoreProvider';

export const getEduUnitsIsLoading = (state: StateSchema) => state.eduModules?.isLoadingUnits;
