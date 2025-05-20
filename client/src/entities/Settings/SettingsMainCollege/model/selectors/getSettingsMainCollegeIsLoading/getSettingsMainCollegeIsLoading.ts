import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeIsLoading = (state: StateSchema) => state.settingsMainCollege?.isLoadingCollegeData;
