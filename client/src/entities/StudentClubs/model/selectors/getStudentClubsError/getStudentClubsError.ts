import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubsError = (state: StateSchema) => state.studentClubs?.error;
