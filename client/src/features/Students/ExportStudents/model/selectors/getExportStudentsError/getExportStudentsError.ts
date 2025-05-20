import { StateSchema } from 'app/providers/StoreProvider';

export const getExportStudentsError = (state: StateSchema) => state.exportStudents?.error;
