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

export interface AddStandardCurriculumUnit {
    standard_curriculum_module_id: number | null;
    educational_modules_unit_id: number | null;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
}
export interface AddStandardCurriculumModule {
    standard_curriculum_module_id: number | null;
    standard_curriculum_id?: number | null;
    standard_curriculum_qualification_id: number | null;
    educational_module_id: number | null;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
    units: AddStandardCurriculumUnit[];
}

export interface AddStandardCurriculumQualificationTrainingTimeDetail {
    credits: number | null;
    hours: number | null;
}

export interface AddStandardCurriculumQualificationTrainingTime {
    basicEducationFrom: AddStandardCurriculumQualificationTrainingTimeDetail;
    basicEducationTo: AddStandardCurriculumQualificationTrainingTimeDetail;
    generalEducationFrom: AddStandardCurriculumQualificationTrainingTimeDetail;
    generalEducationTo: AddStandardCurriculumQualificationTrainingTimeDetail;
}

export interface AddStandardCurriculumQualification {
    standard_curriculum_qualification_id: number | null;
    qualification_id: number | null;
    sort: number;
    compulsory_education_basic_credits_from: number | null;
    compulsory_education_basic_credits_to: number | null;
    compulsory_education_general_credits_from: number | null;
    compulsory_education_general_credits_to: number | null;
    extracurricular_activities_hours_per_week: number | null;
    consultations_hours_per_academic_year: number | null;
    modules: AddStandardCurriculumModule[];
    total: AddStandardCurriculumQualificationTrainingTime;
}

export interface AddStandardCurriculumQualificationTrainingTimeToSend {
    compulsory_education_basic_credits_from: number;
    compulsory_education_basic_credits_to: number;
    compulsory_education_general_credits_from: number;
    compulsory_education_general_credits_to: number;
    extracurricular_activities_hours_per_week: number;
    consultations_hours_per_academic_year: number;
}

export interface AddEditStandardCurriculumModule {
    data?: AddStandardCurriculumModule;
    newFields?: AddStandardCurriculumModule;
}

export interface AddEditStandardCurriculumModuleUnit {
    data?: AddStandardCurriculumUnit;
    newFields?: AddStandardCurriculumUnit;
}

export interface AddEditStandardCurriculumQualification {
    data?: AddStandardCurriculumQualification;
    newFields?: AddStandardCurriculumQualification;
}

interface AddStandardCurriculumStructure {
    general_modules: AddStandardCurriculumModule[];
    qualifications: AddStandardCurriculumQualification[];
}

export interface AddStandardCurriculumGeneralInfo {
    speciality_id: number | null;
    date_of_order: string | null;
    sort: number | null;
}

export interface AddStandardCurriculumData {
    general_info: AddStandardCurriculumGeneralInfo;
    structure: AddStandardCurriculumStructure;
}

export interface AddStandardCurriculumErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddStandardCurriculumErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddStandardCurriculumErrorDataBaseGeneral {
    message: string;
}

export interface AddStandardCurriculumErrorDataBase {
    validation: AddStandardCurriculumErrorDataBaseValidation[];
    general: AddStandardCurriculumErrorDataBaseGeneral[];
}

export interface AddStandardCurriculumErrors {
    errors?: AddStandardCurriculumErrorApi[] | AddStandardCurriculumErrorDataBase;
    status: number;
}

export interface AddStandardCurriculumSchema {
    data: AddStandardCurriculumData;
    newModuleModalData: AddStandardCurriculumModule;
    newUnitModalData: AddStandardCurriculumUnit;
    newQualificationModalData: AddStandardCurriculumQualification;
    editModuleModalData: AddEditStandardCurriculumModule;
    editModuleUnitModalData: AddEditStandardCurriculumModuleUnit;
    editQualificationModalData: AddEditStandardCurriculumQualification;
    isLoading: boolean;
    errors?: AddStandardCurriculumErrors;
    isLoadingQualificationTrainingTime: boolean;
    errorQualificationTrainingTime?: string;
}
