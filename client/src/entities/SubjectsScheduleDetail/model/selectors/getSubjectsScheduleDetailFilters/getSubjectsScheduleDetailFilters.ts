import { StateSchema } from 'app/providers/StoreProvider';

export const getSubjectsScheduleDetailFilters = (state: StateSchema) => state.subjectsScheduleDetail?.filters;
