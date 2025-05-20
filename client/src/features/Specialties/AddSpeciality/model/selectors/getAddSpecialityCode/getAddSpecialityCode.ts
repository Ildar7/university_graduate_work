import { StateSchema } from 'app/providers/StoreProvider';

export const getAddSpecialityCode = (state: StateSchema) => state.addSpeciality?.data.code;
