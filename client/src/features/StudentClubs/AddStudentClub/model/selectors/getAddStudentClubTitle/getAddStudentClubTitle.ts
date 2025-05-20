import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentClubTitle = (state: StateSchema) => state.addStudentClub?.data.title;
