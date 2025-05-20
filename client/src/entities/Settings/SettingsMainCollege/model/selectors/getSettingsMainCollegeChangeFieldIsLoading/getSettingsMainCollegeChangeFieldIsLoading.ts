import { StateSchema } from 'app/providers/StoreProvider';

export const getSettingsMainCollegeChangeFieldIsLoading = (state: StateSchema) => state
    .settingsMainCollege?.isLoadingChangeField;
