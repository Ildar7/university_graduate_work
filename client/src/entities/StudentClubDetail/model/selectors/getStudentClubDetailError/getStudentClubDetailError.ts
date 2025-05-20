import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubDetailError = (state: StateSchema) => state.studentClubDetail?.error;
