export interface PaginationType {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}

export interface GenderType {
    id_gender: number;
    gender: string;
}

export interface GenderTypeData {
    data: GenderType[];
}

export interface NationalityData {
    id_nationality: number;
    nationality: string;
}

export interface NationalityType {
    data: NationalityData[];
    pagination: PaginationType;
}

export interface SpecialitiesData {
    id_spec: number;
    shifr_spec: string;
    speciality: string;
}

export interface SpecialitiesType {
    data: SpecialitiesData[];
    pagination: PaginationType;
}

export interface QualificationsData {
    'id_qual': number,
    'shifr_qual': string,
    'qualification': string,
    'specialty_id': number
}

export interface QualificationsType {
    data: QualificationsData[];
    pagination: PaginationType;
}

export interface StudyDurationsData {
    'id_durationoftraining': number,
    'durationoftraining': string
}

export interface StudyDurationsType {
    data: StudyDurationsData[];
    pagination: PaginationType;
}

export interface StudyDirectionsData {
    id_typeofdirection: number;
    typeofdirection: string;
}

export interface StudyDirectionsType {
    data: StudyDirectionsData[];
    pagination: PaginationType;
}

export interface EducationsCoursesData {
    'id_courseoftraining': number,
    'courseoftraining': string,
    'coursevalue': number
}

export interface EducationsCoursesType {
    data: EducationsCoursesData[];
    pagination: PaginationType;
}

export interface EducationsFormsData {
    'id_typeoftraining': number,
    'typeoftraining': string
}

export interface EducationsFormsType {
    data: EducationsFormsData[];
    pagination: PaginationType;
}

export interface EnrollmentTypesData {
    'id_typeenrollment': number,
    'typeenrollment': string
}

export interface EnrollmentTypesType {
    data: EnrollmentTypesData[];
    pagination: PaginationType;
}

export interface StudentArrivalSourcesData {
    'id_comesfrom': number,
    'comesfrom': string
}

export interface StudentArrivalSourcesType {
    data: StudentArrivalSourcesData[];
    pagination: PaginationType;
}

export interface FinishedEducationTypesData {
    'id_fromacceptedfinished': number,
    'fromacceptedfinished': string
}

export interface FinishedEducationTypesType {
    data: FinishedEducationTypesData[];
    pagination: PaginationType;
}

export interface StudyLanguagesData {
    'id_languageofedu': number,
    'languageofedu': string
}

export interface StudyLanguagesType {
    data: StudyLanguagesData[];
    pagination: PaginationType;
}

export interface ResidenceTypesData {
    'id_typeofareaofresidence': number,
    'typeofareaofresidence': string
}

export interface ResidenceTypesType {
    data: ResidenceTypesData[];
    pagination: PaginationType;
}

export interface NeedHostelTypesType {
    'id_needhostel': number,
    'needhostel': string
}

export interface NeedHostelTypesTypeData {
    data: NeedHostelTypesType[];
}

export interface FinancingSourcesData {
    'id_whopaying': number,
    'whopaying': string
}

export interface FinancingSourcesType {
    data: FinancingSourcesData[];
    pagination: PaginationType;
}

export interface AdmissionQuotasTypesType {
    'id_kvotum': number,
    'kvotum_name': string
}

export interface AdmissionQuotasTypesTypeData {
    data: AdmissionQuotasTypesType[];
}

export interface MaterialAssistanceTypesType {
    'id_finimatpomosh': number,
    'finimatpomosh': string
}

export interface MaterialAssistanceTypesTypeData {
    data: MaterialAssistanceTypesType[];
}

export interface CitizenshipTypesData {
    id_citizenship: number;
    citizenship: string;
    country_id: number;
}

export interface CitizenshipTypesType {
    data: CitizenshipTypesData[];
    pagination: PaginationType;
}

export interface TableFiltersType {
    gender: GenderType[];
    nationality: NationalityType;
    speciality: SpecialitiesType;
    qualifications: QualificationsType;
    studyDurations: StudyDurationsType;
    studyDirections: StudyDirectionsType;
    educationsCourses: EducationsCoursesType;
    educationsForms: EducationsFormsType;
    enrollmentTypes: EnrollmentTypesType;
    studentArrivalSources: StudentArrivalSourcesType;
    finishedEducationTypes: FinishedEducationTypesType;
    studyLanguages: StudyLanguagesType;
    residenceTypes: ResidenceTypesType;
    needHostelTypes: NeedHostelTypesType[];
    financingSources: FinancingSourcesType;
    admissionQuotasTypes: AdmissionQuotasTypesType[];
    materialAssistanceTypes: MaterialAssistanceTypesType[];
    citizenshipTypes: CitizenshipTypesType;
}

export interface TableFiltersSchema {
    data?: TableFiltersType;
    isLoading: boolean;
    error?: string;
}
