import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeError = (state: StateSchema) => state.settingsMainCollege?.errorCollegeData;
