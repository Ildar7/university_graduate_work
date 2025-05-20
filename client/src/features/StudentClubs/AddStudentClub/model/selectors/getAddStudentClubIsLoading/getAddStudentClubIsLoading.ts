import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentClubIsLoading = (state: StateSchema) => state.addStudentClub?.isLoading;
