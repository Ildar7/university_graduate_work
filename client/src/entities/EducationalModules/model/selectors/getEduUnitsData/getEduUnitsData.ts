import { StateSchema } from 'app/providers/StoreProvider';

export const getEduUnitsData = (state: StateSchema) => state.eduModules?.dataUnits;
