import { StateSchema } from 'app/providers/StoreProvider';

export const getAddSpecialityTitle = (state: StateSchema) => state.addSpeciality?.data.title;
