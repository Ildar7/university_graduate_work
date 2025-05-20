import { StateSchema } from 'app/providers/StoreProvider';

export const getExportStudentsIsLoading = (state: StateSchema) => state.exportStudents?.isLoading;
