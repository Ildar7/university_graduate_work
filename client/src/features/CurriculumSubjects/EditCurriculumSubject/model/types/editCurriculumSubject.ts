export interface EditCurriculumSubjectType {
    name: string;
    sort: number;
    module_id: number;
    unit_id: number;
}

export interface NewFieldsType {
    name?: string | null;
    sort?: number | null;
    module_id?: number | null;
    unit_id?: number | null;
}

export interface EditCurriculumSubjectErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditCurriculumSubjectErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditCurriculumSubjectErrorDataBaseGeneral {
    message: string;
}

export interface EditCurriculumSubjectErrorDataBase {
    validation: EditCurriculumSubjectErrorDataBaseValidation[];
    general: EditCurriculumSubjectErrorDataBaseGeneral[];
}

export interface EditCurriculumSubjectErrors {
    errors?: EditCurriculumSubjectErrorApi[] | EditCurriculumSubjectErrorDataBase;
    status: number;
}

export interface EditCurriculumSubjectSchema {
    data?: EditCurriculumSubjectType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditCurriculumSubjectErrors;
}
