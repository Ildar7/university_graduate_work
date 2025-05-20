export interface EditWorkingCurriculumType {
    standard_curriculum_id: number | string;
    education_base_id: number;
    is_full_time_education: boolean;
    approval_date: string;
    version: number;
    academic_year_from: string;
    title: string;
    is_active: boolean;
}

export interface NewFieldsType {
    standard_curriculum_id?: number | string | null;
    education_base_id?: number | null;
    is_full_time_education?: boolean | null;
    approval_date?: string | null;
    version?: number | null;
    academic_year_from?: string | null;
    title?: string | null;
    is_active?: boolean;
}

export interface EditWorkingCurriculumErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditWorkingCurriculumErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditWorkingCurriculumErrorDataBaseGeneral {
    message: string;
}

export interface EditWorkingCurriculumErrorDataBase {
    validation: EditWorkingCurriculumErrorDataBaseValidation[];
    general: EditWorkingCurriculumErrorDataBaseGeneral[];
}

export interface EditWorkingCurriculumErrors {
    errors?: EditWorkingCurriculumErrorApi[] | EditWorkingCurriculumErrorDataBase;
    status: number;
}

export interface EditWorkingCurriculumSchema {
    data?: EditWorkingCurriculumType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditWorkingCurriculumErrors;
}
