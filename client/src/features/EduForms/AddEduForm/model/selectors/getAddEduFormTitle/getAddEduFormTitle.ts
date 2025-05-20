import { StateSchema } from 'app/providers/StoreProvider';

export const getAddEduFormTitle = (state: StateSchema) => state.addEduForm?.data.title;
