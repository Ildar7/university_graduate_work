export interface AddStudentSectionType {
    title: string | null;
}

export interface AddStudentSectionErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddStudentSectionErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddStudentSectionErrorDataBaseGeneral {
    message: string;
}

export interface AddStudentSectionErrorDataBase {
    validation: AddStudentSectionErrorDataBaseValidation[];
    general: AddStudentSectionErrorDataBaseGeneral[];
}

export interface AddStudentSectionErrors {
    errors?: AddStudentSectionErrorApi[] | AddStudentSectionErrorDataBase;
    status: number;
}

export interface AddStudentSectionSchema {
    data: AddStudentSectionType;
    isLoading: boolean;
    errors?: AddStudentSectionErrors;
}
