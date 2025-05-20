import { StateSchema } from 'app/providers/StoreProvider';

export const getEditSpecialityData = (state: StateSchema) => state.editSpeciality?.data;
