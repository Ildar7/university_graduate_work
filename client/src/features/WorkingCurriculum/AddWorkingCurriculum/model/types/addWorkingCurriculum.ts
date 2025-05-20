export interface AddWorkingCurriculumType {
    standard_curriculum_id: string | null;
    education_base_id: number | null;
    is_full_time_education: boolean | null;
    approval_date: string | null;
    version: number | null;
    academic_year_from: string | null;
    title: string | null;
    is_active: boolean;
}

export interface AddWorkingCurriculumErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddWorkingCurriculumErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddWorkingCurriculumErrorDataBaseGeneral {
    message: string;
}

export interface AddWorkingCurriculumErrorDataBase {
    validation: AddWorkingCurriculumErrorDataBaseValidation[];
    general: AddWorkingCurriculumErrorDataBaseGeneral[];
}

export interface AddWorkingCurriculumErrors {
    errors?: AddWorkingCurriculumErrorApi[] | AddWorkingCurriculumErrorDataBase;
    status: number;
}

export interface AddWorkingCurriculumSchema {
    data: AddWorkingCurriculumType;
    isLoading: boolean;
    errors?: AddWorkingCurriculumErrors;
}
