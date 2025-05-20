import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubsIsLoading = (state: StateSchema) => state.studentClubs?.isLoading;
