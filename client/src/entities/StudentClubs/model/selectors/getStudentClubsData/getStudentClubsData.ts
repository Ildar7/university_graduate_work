import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubsData = (state: StateSchema) => state.studentClubs?.data;
