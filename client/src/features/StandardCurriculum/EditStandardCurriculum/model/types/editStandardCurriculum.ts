export type PlaceToAddNewItems = 'data' | 'newFields';

export type NewModuleFields = 'standard_curriculum_id'
    | 'standard_curriculum_qualification_id'
    | 'educational_module_id'
    | 'sort'
    | 'has_in_basic_education'
    | 'has_in_general_education';

export type NewUnitFields = 'educational_modules_unit_id'
    | 'sort'
    | 'has_in_basic_education'
    | 'has_in_general_education';

export type NewQualificationFields = 'qualification_id'
    | 'sort'
    | 'compulsory_education_basic_credits_from'
    | 'compulsory_education_basic_credits_to'
    | 'compulsory_education_general_credits_from'
    | 'compulsory_education_general_credits_to'
    | 'extracurricular_activities_hours_per_week'
    | 'consultations_hours_per_academic_year';

export type CurriculumStructureModeType = 'general_modules' | 'qualifications';

export interface EditStandardCurriculumUnit {
    standard_curriculum_module_id: number | null;
    educational_modules_unit_id: number | null;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
}
export interface EditStandardCurriculumModule {
    standard_curriculum_module_id: number | null;
    standard_curriculum_id?: number | null;
    standard_curriculum_qualification_id: number | null;
    educational_module_id: number | null;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
    units: EditStandardCurriculumUnit[];
}

export interface EditStandardCurriculumQualificationTrainingTimeDetail {
    credits: number | null;
    hours: number | null;
}

export interface EditStandardCurriculumQualificationTrainingTime {
    basicEducationFrom: EditStandardCurriculumQualificationTrainingTimeDetail;
    basicEducationTo: EditStandardCurriculumQualificationTrainingTimeDetail;
    generalEducationFrom: EditStandardCurriculumQualificationTrainingTimeDetail;
    generalEducationTo: EditStandardCurriculumQualificationTrainingTimeDetail;
}

export interface EditStandardCurriculumQualification {
    standard_curriculum_qualification_id: number | null;
    qualification_id: number | null;
    sort: number;
    compulsory_education_basic_credits_from: number | null;
    compulsory_education_basic_credits_to: number | null;
    compulsory_education_general_credits_from: number | null;
    compulsory_education_general_credits_to: number | null;
    extracurricular_activities_hours_per_week: number | null;
    consultations_hours_per_academic_year: number | null;
    modules: EditStandardCurriculumModule[];
    total: EditStandardCurriculumQualificationTrainingTime;
}

export interface EditStandardCurriculumQualificationTrainingTimeToSend {
    compulsory_education_basic_credits_from: number;
    compulsory_education_basic_credits_to: number;
    compulsory_education_general_credits_from: number;
    compulsory_education_general_credits_to: number;
    extracurricular_activities_hours_per_week: number;
    consultations_hours_per_academic_year: number;
}

export interface AddEditStandardCurriculumModule {
    data?: EditStandardCurriculumModule;
    newFields?: EditStandardCurriculumModule;
}

export interface AddEditStandardCurriculumModuleUnit {
    data?: EditStandardCurriculumUnit;
    newFields?: EditStandardCurriculumUnit;
}

export interface AddEditStandardCurriculumQualification {
    data?: EditStandardCurriculumQualification;
    newFields?: EditStandardCurriculumQualification;
}

interface EditStandardCurriculumStructure {
    general_modules: EditStandardCurriculumModule[];
    qualifications: EditStandardCurriculumQualification[];
}

export interface EditStandardCurriculumGeneralInfo {
    speciality_id: number | null;
    date_of_order: string | null;
    sort: number | null;
}

export interface EditStandardCurriculumData {
    general_info: EditStandardCurriculumGeneralInfo;
    structure: EditStandardCurriculumStructure;
}

export interface EditStandardCurriculumErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditStandardCurriculumErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditStandardCurriculumErrorDataBaseGeneral {
    message: string;
}

export interface EditStandardCurriculumErrorDataBase {
    validation: EditStandardCurriculumErrorDataBaseValidation[];
    general: EditStandardCurriculumErrorDataBaseGeneral[];
}

export interface EditStandardCurriculumErrors {
    errors?: EditStandardCurriculumErrorApi[] | EditStandardCurriculumErrorDataBase;
    status: number;
}

export interface EditStandardCurriculumSchema {
    data: EditStandardCurriculumData;
    newFields?: EditStandardCurriculumData;
    newModuleModalData: EditStandardCurriculumModule;
    newUnitModalData: EditStandardCurriculumUnit;
    newQualificationModalData: EditStandardCurriculumQualification;
    editModuleModalData: AddEditStandardCurriculumModule;
    editModuleUnitModalData: AddEditStandardCurriculumModuleUnit;
    editQualificationModalData: AddEditStandardCurriculumQualification;
    modulesToDelete: EditStandardCurriculumModule[];
    moduleUnitsToDelete: EditStandardCurriculumUnit[];
    qualificationsToDelete: EditStandardCurriculumQualification[];
    isLoading: boolean;
    errors?: EditStandardCurriculumErrors;
    isLoadingQualificationTrainingTime: boolean;
    errorQualificationTrainingTime?: string;
}
