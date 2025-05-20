export {
    calculateQualificationTrainingTime,
} from './model/services/calculateQualificationTrainingTime/calculateQualificationTrainingTime';

export {
    StandardCurriculumReturnBackModal,
} from './ui/StandardCurriculumReturnBackModal/StandardCurriculumReturnBackModal';

export {
    EditStandardCurriculumQualificationModal,
} from './ui/EditStandardCurriculumQualificationModal/EditStandardCurriculumQualificationModal';

export {
    AddStandardCurriculumQualificationModal,
} from './ui/AddStandardCurriculumQualificationModal/AddStandardCurriculumQualificationModal';

export {
    EditStandardCurriculumModuleUnitModal,
} from './ui/EditStandardCurriculumModuleUnitModal/EditStandardCurriculumModuleUnitModal';
export {
    EditStandardCurriculumModuleModal,
} from './ui/EditStandardCurriculumModuleModal/EditStandardCurriculumModuleModal';

export {
    AddStandardCurriculumModuleModal,
} from './ui/AddStandardCurriculumModuleModal/AddStandardCurriculumModuleModal';
export {
    AddStandardCurriculumModuleUnitModal,
} from './ui/AddStandardCurriculumModuleUnitModal/AddStandardCurriculumModuleUnitModal';

export {
    StandardCurriculumStructure,
} from './ui/StandardCurriculumStructure/StandardCurriculumStructure';

export {
    StandardCurriculumQualifications,
} from './ui/StandardCurriculumQualifications/StandardCurriculumQualifications';

export {
    StandardCurriculumGeneralInfo,
} from './ui/StandardCurriculumGeneralInfo/StandardCurriculumGeneralInfo';

export { fetchStandardCurriculum } from './model/services/fetchStandardCurriculum/fetchStandardCurriculum';

export { StandardCurriculum } from './ui/StandardCurriculum/StandardCurriculum';

export { getStandardCurriculumData } from './model/selectors/getStandardCurriculumData/getStandardCurriculumData';
export { getStandardCurriculumError } from './model/selectors/getStandardCurriculumError/getStandardCurriculumError';
export {
    getStandardCurriculumIsLoading,
} from './model/selectors/getStandardCurriculumIsLoading/getStandardCurriculumIsLoading';

export { standardCurriculumActions, standardCurriculumReducer } from './model/slice/standardCurriculumSlice';

export {
    StandardCurriculumSchema, StandardCurriculumData, StandardCurriculumError, StandardCurriculumType,
} from './model/types/standardCurriculum';
