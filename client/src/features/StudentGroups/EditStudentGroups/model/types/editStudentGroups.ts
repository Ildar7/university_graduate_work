export interface EditStudentGroupsType {
    name: string;
    enrollment_year: number;
    id_specialty: number;
    qualifications: number[];
    course: number;
    study_duration: number;
    is_full_time: boolean;
    short_name: string;
    serial_number: number;
}

export interface NewFieldsType {
    name?: string | null;
    enrollment_year?: number | null;
    id_specialty?: number | null;
    qualifications?: number[] | null;
    course?: number | null;
    study_duration?: number | null;
    is_full_time?: boolean | null;
    short_name?: string | null;
    serial_number?: number | null;
    code?: string | null;
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
