import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentSectionNewFieldsData = (state: StateSchema) => state.editStudentSection?.newFields?.title;
