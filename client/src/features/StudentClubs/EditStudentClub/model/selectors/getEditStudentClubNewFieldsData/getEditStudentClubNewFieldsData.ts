import { StateSchema } from 'app/providers/StoreProvider';

export const getEditStudentClubNewFieldsData = (state: StateSchema) => state.editStudentClub?.newFields?.title;
