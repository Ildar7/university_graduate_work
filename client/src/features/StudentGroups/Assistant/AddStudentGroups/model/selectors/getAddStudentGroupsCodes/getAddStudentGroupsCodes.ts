import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentGroupsCodesData = (state: StateSchema) => state.addStudentGroupsAssistant?.codes.data;
export const getAddStudentGroupsCodesCanSend = (state: StateSchema) => state.addStudentGroupsAssistant?.codes.canSend;
