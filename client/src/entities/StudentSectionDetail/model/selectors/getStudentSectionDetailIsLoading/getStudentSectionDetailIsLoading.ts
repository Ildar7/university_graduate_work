import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionDetailIsLoading = (state: StateSchema) => state.studentSectionDetail?.isLoading;
