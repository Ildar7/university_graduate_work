import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentSectionData = (state: StateSchema) => state.editStudentSection?.data;
