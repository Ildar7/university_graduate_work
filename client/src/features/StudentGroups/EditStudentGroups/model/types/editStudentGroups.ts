export interface EditStudentGroupsType {
    name: string;
    id_language: number;
    enrollment_year: number;
    id_specialty: number;
    qualifications: number[];
    id_education_base: number;
    course: number;
    study_duration: number;
    is_full_time: boolean;
    short_name: string;
    serial_number: number;
}

export interface NewFieldsType {
    name?: string | null;
    id_language?: number | null;
    enrollment_year?: number | null;
    id_specialty?: number | null;
    qualifications?: number[] | null;
    id_education_base?: number | null;
    course?: number | null;
    study_duration?: number | null;
    is_full_time?: boolean | null;
    short_name?: string | null;
    serial_number?: number | null;
}

export interface EditStudentGroupsErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditStudentGroupsErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditStudentGroupsErrorDataBaseGeneral {
    message: string;
}

export interface EditStudentGroupsErrorDataBase {
    validation: EditStudentGroupsErrorDataBaseValidation[];
    general: EditStudentGroupsErrorDataBaseGeneral[];
}

export interface EditStudentGroupsErrors {
    errors?: EditStudentGroupsErrorApi[] | EditStudentGroupsErrorDataBase;
    status: number;
}

export interface EditStudentGroupsSchema {
    data?: EditStudentGroupsType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditStudentGroupsErrors;
}
