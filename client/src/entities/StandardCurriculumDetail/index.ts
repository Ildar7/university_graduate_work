export {
    getStandardCurriculumDetailError,
} from './model/selectors/getStandardCurriculumDetailError/getStandardCurriculumDetailError';
export {
    getStandardCurriculumDetailIsLoading,
} from './model/selectors/getStandardCurriculumDetailIsLoading/getStandardCurriculumDetailIsLoading';
export {
    getStandardCurriculumDetailData,
} from './model/selectors/getStandardCurriculumDetailData/getStandardCurriculumDetailData';
export {
    fetchStandardCurriculumDetail,
} from './model/services/fetchStandardCurriculumDetail/fetchStandardCurriculumDetail';

export { standardCurriculumDetailActions, standardCurriculumDetailReducer } from './model/slice/standardCurriculumDetailSlice';

export {
    StandardCurriculumDetailSchema,
    StandardCurriculumDetailType,
    StandardCurriculumDetailModulesType,
    StandardCurriculumDetailQualificationsType,
    StandardCurriculumDetailUnitsType,
} from './model/types/standardCurriculumDetail';
