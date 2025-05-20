import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeTabs = (state: StateSchema) => state.settingsMainCollege?.tabs;
