import { StateSchema } from 'app/providers/StoreProvider';

export const getAddStudentGroupsSpecialtiesData = (state: StateSchema) => state.addStudentGroupsAssistant?.specialties.data;
export const getAddStudentGroupsSpecialtiesIsLoading = (state: StateSchema) => state.addStudentGroupsAssistant?.specialties.isLoading;
export const getAddStudentGroupsSpecialtiesError = (state: StateSchema) => state.addStudentGroupsAssistant?.specialties.error;
