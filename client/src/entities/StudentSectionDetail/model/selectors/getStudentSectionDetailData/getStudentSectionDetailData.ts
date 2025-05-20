import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentSectionDetailData = (state: StateSchema) => state.studentSectionDetail?.data;
