import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubDetailIsLoading = (state: StateSchema) => state.studentClubDetail?.isLoading;
