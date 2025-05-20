export interface EditStudentSectionType {
    id_sections: number;
    sections: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditStudentSectionErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditStudentSectionErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditStudentSectionErrorDataBaseGeneral {
    message: string;
}

export interface EditStudentSectionErrorDataBase {
    validation: EditStudentSectionErrorDataBaseValidation[];
    general: EditStudentSectionErrorDataBaseGeneral[];
}

export interface EditStudentSectionErrors {
    errors?: EditStudentSectionErrorApi[] | EditStudentSectionErrorDataBase;
    status: number;
}

export interface EditStudentSectionSchema {
    data?: EditStudentSectionType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditStudentSectionErrors;
}
