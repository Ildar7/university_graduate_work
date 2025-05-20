import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionDetailError = (state: StateSchema) => state.studentSectionDetail?.error;
