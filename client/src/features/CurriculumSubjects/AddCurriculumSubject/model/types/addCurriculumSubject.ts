export interface AddCurriculumSubjectType {
    name: string | null;
    sort: number | null;
    module_id: number | null;
    unit_id: number | null;
}

export interface AddCurriculumSubjectErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddCurriculumSubjectErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddCurriculumSubjectErrorDataBaseGeneral {
    message: string;
}

export interface AddCurriculumSubjectErrorDataBase {
    validation: AddCurriculumSubjectErrorDataBaseValidation[];
    general: AddCurriculumSubjectErrorDataBaseGeneral[];
}

export interface AddCurriculumSubjectErrors {
    errors?: AddCurriculumSubjectErrorApi[] | AddCurriculumSubjectErrorDataBase;
    status: number;
}

export interface AddCurriculumSubjectSchema {
    data?: AddCurriculumSubjectType;
    isLoading: boolean;
    errors?: AddCurriculumSubjectErrors;
}
