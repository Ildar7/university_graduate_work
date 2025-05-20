import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubsLimit = (state: StateSchema) => state.studentClubs?.limit;
