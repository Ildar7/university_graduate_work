import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeData = (state: StateSchema) => state.settingsMainCollege?.data;
