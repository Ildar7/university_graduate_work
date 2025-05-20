import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentClubDetailData = (state: StateSchema) => state.studentClubDetail?.data;
