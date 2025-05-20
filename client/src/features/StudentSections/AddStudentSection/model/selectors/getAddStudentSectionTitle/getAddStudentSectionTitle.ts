import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentSectionTitle = (state: StateSchema) => state.addStudentSection?.data.title;
