export {
    fetchEducationalUnits,
} from './model/services/fetchEducationalUnits/fetchEducationalUnits';

export {
    fetchEducationalModules,
} from './model/services/fetchEducationalModules/fetchEducationalModules';

export { getEduUnitsData } from './model/selectors/getEduUnitsData/getEduUnitsData';
export { getEduUnitsError } from './model/selectors/getEduUnitsError/getEduUnitsError';
export {
    getEduUnitsIsLoading,
} from './model/selectors/getEduUnitsIsLoading/getEduUnitsIsLoading';
export { getEduModulesData } from './model/selectors/getEduModulesData/getEduModulesData';
export { getEduModulesError } from './model/selectors/getEduModulesError/getEduModulesError';
export {
    getEduModulesIsLoading,
} from './model/selectors/getEduModulesIsLoading/getEduModulesIsLoading';

export { educationalModulesActions, educationalModulesReducer } from './model/slice/educationalModulesSlice';

export { EducationalModulesSchema, EducationalModulesData, EducationalUnitsData } from './model/types/educationalModules';

export { EducationalModules } from './ui/EducationalModules';
