export {
    getEducationalModuleDetailError,
} from './model/selectors/getEducationalModuleDetailError/getEducationalModuleDetailError';
export {
    getEducationalModuleDetailIsLoading,
} from './model/selectors/getEducationalModuleDetailIsLoading/getEducationalModuleDetailIsLoading';
export {
    getEducationalModuleDetailData,
} from './model/selectors/getEducationalModuleDetailData/getEducationalModuleDetailData';
export {
    fetchEducationalModuleDetail,
} from './model/services/fetchEducationalModuleDetail/fetchEducationalModuleDetail';

export { educationalModuleDetailActions, educationalModuleDetailReducer } from './model/slice/educationalModuleDetailSlice';

export { EducationalModuleDetailSchema, EducationalModuleDetailData } from './model/types/educationalModuleDetail';
