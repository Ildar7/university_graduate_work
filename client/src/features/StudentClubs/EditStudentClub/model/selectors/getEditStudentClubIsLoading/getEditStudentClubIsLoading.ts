import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentClubIsLoading = (state: StateSchema) => state.editStudentClub?.isLoading;
