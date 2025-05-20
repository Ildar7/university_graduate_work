export interface EditEmployeePositionType {
    name: string | null;
}

export interface NewFieldsType {
    name?: string | null;
}

export interface EditEmployeePositionErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEmployeePositionErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEmployeePositionErrorDataBaseGeneral {
    message: string;
}

export interface EditEmployeePositionErrorDataBase {
    validation: EditEmployeePositionErrorDataBaseValidation[];
    general: EditEmployeePositionErrorDataBaseGeneral[];
}

export interface EditEmployeePositionErrors {
    errors?: EditEmployeePositionErrorApi[] | EditEmployeePositionErrorDataBase;
    status: number;
}

export interface EditEmployeePositionSchema {
    data?: EditEmployeePositionType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEmployeePositionErrors;
}
