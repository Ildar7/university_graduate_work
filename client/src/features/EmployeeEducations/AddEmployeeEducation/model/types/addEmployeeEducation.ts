export interface AddEmployeeEducationType {
    name: string | null;
}

export interface AddEmployeeEducationErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEmployeeEducationErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEmployeeEducationErrorDataBaseGeneral {
    message: string;
}

export interface AddEmployeeEducationErrorDataBase {
    validation: AddEmployeeEducationErrorDataBaseValidation[];
    general: AddEmployeeEducationErrorDataBaseGeneral[];
}

export interface AddEmployeeEducationErrors {
    errors?: AddEmployeeEducationErrorApi[] | AddEmployeeEducationErrorDataBase;
    status: number;
}

export interface AddEmployeeEducationSchema {
    data: AddEmployeeEducationType;
    isLoading: boolean;
    errors?: AddEmployeeEducationErrors;
}
