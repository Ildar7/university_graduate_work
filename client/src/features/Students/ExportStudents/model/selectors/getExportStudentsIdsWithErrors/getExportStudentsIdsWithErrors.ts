import { StateSchema } from 'app/providers/StoreProvider';

export const getExportStudentsIdsWithErrors = (state: StateSchema) => state.exportStudents?.data?.idsWithErrors;
