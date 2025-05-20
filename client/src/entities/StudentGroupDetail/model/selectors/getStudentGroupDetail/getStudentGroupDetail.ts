import { StateSchema } from 'app/providers/StoreProvider';

export const getStudentGroupDetailData = (state: StateSchema) => state.studentGroupDetail?.data;
export const getStudentGroupDetailIsLoading = (state: StateSchema) => state.studentGroupDetail?.isLoading;
export const getStudentGroupDetailError = (state: StateSchema) => state.studentGroupDetail?.error;
