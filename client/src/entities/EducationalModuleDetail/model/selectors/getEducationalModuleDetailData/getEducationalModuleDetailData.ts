import { StateSchema } from 'app/providers/StoreProvider';

export const getEducationalModuleDetailData = (state: StateSchema) => state.eduModuleDetail?.data;
