import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduUnitData = (state: StateSchema) => state.addEduUnit?.data;
