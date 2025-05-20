import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentClubError = (state: StateSchema) => state.editStudentClub?.errors;
