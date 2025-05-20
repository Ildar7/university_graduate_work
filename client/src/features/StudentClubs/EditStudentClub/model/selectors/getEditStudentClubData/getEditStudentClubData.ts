import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentClubData = (state: StateSchema) => state.editStudentClub?.data;
