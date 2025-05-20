import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubsPage = (state: StateSchema) => state.studentClubs?.page;
