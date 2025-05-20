export {
    fetchCollegeCoreOptions,
} from './model/services/fetchCollegeCoreOptions/fetchCollegeCoreOptions';
export {
    getSettingsMainCollegeDataToChange,
} from './model/selectors/getSettingsMainCollegeDataToChange/getSettingsMainCollegeDataToChange';
export {
    getSettingsMainCollegeChangeFieldIsLoading,
} from './model/selectors/getSettingsMainCollegeChangeFieldIsLoading/getSettingsMainCollegeChangeFieldIsLoading';
export {
    getSettingsMainCollegeTabs,
} from './model/selectors/getSettingsMainCollegeTabs/getSettingsMainCollegeTabs';
export {
    getSettingsMainCollegeIsLoading,
} from './model/selectors/getSettingsMainCollegeIsLoading/getSettingsMainCollegeIsLoading';
export {
    getSettingsMainCollegeError,
} from './model/selectors/getSettingsMainCollegeError/getSettingsMainCollegeError';
export {
    getSettingsMainCollegeData,
} from './model/selectors/getSettingsMainCollegeData/getSettingsMainCollegeData';

export { SettingsMainCollege } from './ui/SettingsMainCollege';

export { settingsMainCollegeActions, settingsMainCollegeReducer } from './model/slice/settingsMainCollegeSlice';
export { SettingsMainCollegeSchema, SettingsMainCollegeData } from './model/types/settingsMainCollege';
