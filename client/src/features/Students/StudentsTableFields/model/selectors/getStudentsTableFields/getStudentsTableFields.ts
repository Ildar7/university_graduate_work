import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentsTableFieldsData = (state: StateSchema) => state.studentsTableFields?.data;
