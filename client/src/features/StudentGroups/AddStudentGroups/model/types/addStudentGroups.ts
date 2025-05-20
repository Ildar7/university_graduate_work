export interface AddStudentGroupType {
    name: string | null;
    id_language: number | null;
    enrollment_year: number | null;
    id_specialty: number | null;
    qualifications: number[] | null;
    id_education_base: number | null;
    course: number | null;
    study_duration: number | null;
    is_full_time: boolean | null;
    short_name: string | null;
    serial_number: number | null;
}

export interface AddStudentGroupErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddStudentGroupErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddStudentGroupErrorDataBaseGeneral {
    message: string;
}

export interface AddStudentGroupErrorDataBase {
    validation: AddStudentGroupErrorDataBaseValidation[];
    general: AddStudentGroupErrorDataBaseGeneral[];
}

export interface AddStudentGroupErrors {
    errors?: AddStudentGroupErrorApi[] | AddStudentGroupErrorDataBase;
    status: number;
}

export interface AddStudentGroupSchema {
    data: AddStudentGroupType;
    isLoading: boolean;
    errors?: AddStudentGroupErrors;
}
