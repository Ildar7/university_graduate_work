import { StateSchema } from 'app/providers/StoreProvider';

export const getEduUnitsError = (state: StateSchema) => state.eduModules?.errorUnits;
