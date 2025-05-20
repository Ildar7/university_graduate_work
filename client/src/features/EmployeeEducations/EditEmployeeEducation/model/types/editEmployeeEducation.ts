export interface EditEmployeeEducationType {
    name: string | null;
}

export interface NewFieldsType {
    name?: string | null;
}

export interface EditEmployeeEducationErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEmployeeEducationErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEmployeeEducationErrorDataBaseGeneral {
    message: string;
}

export interface EditEmployeeEducationErrorDataBase {
    validation: EditEmployeeEducationErrorDataBaseValidation[];
    general: EditEmployeeEducationErrorDataBaseGeneral[];
}

export interface EditEmployeeEducationErrors {
    errors?: EditEmployeeEducationErrorApi[] | EditEmployeeEducationErrorDataBase;
    status: number;
}

export interface EditEmployeeEducationSchema {
    data?: EditEmployeeEducationType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEmployeeEducationErrors;
}
