import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeChangeFieldStatus = (state: StateSchema) => state
    .settingsMainCollege?.changeStatus;
