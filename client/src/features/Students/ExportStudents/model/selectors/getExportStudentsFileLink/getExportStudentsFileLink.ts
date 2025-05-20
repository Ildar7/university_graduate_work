import { StateSchema } from 'app/providers/StoreProvider';

export const getExportStudentsFileLink = (state: StateSchema) => state.exportStudents?.data?.fileLink;
