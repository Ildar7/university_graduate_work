import { StateSchema } from 'app/providers/StoreProvider';

export const getPracticeTypeDetailError = (state: StateSchema) => state.practiceTypeDetail?.error;
