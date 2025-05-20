export interface EditPracticeTypeType {
    id_practice: number;
    practice: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditPracticeTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditPracticeTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditPracticeTypeErrorDataBaseGeneral {
    message: string;
}

export interface EditPracticeTypeErrorDataBase {
    validation: EditPracticeTypeErrorDataBaseValidation[];
    general: EditPracticeTypeErrorDataBaseGeneral[];
}

export interface EditPracticeTypeErrors {
    errors?: EditPracticeTypeErrorApi[] | EditPracticeTypeErrorDataBase;
    status: number;
}

export interface EditPracticeTypeSchema {
    data?: EditPracticeTypeType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditPracticeTypeErrors;
}
