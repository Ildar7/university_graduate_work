import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentClubError = (state: StateSchema) => state.addStudentClub?.errors;
