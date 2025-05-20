export interface AddEmployeeSubjectType {
    subject_id: number | null;
}

export interface AddEmployeeSubjectErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEmployeeSubjectErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEmployeeSubjectErrorDataBaseGeneral {
    message: string;
}

export interface AddEmployeeSubjectErrorDataBase {
    validation: AddEmployeeSubjectErrorDataBaseValidation[];
    general: AddEmployeeSubjectErrorDataBaseGeneral[];
}

export interface AddEmployeeSubjectErrors {
    errors?: AddEmployeeSubjectErrorApi[] | AddEmployeeSubjectErrorDataBase;
    status: number;
}

export interface AddEmployeeSubjectSchema {
    data: AddEmployeeSubjectType;
    isLoading: boolean;
    errors?: AddEmployeeSubjectErrors;
}
