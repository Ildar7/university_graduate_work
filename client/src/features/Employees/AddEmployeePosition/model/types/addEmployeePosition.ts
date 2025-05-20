export interface AddEmployeePositionType {
    position_ids: number[] | null;
}

export interface AddEmployeePositionErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEmployeePositionErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEmployeePositionErrorDataBaseGeneral {
    message: string;
}

export interface AddEmployeePositionErrorDataBase {
    validation: AddEmployeePositionErrorDataBaseValidation[];
    general: AddEmployeePositionErrorDataBaseGeneral[];
}

export interface AddEmployeePositionErrors {
    errors?: AddEmployeePositionErrorApi[] | AddEmployeePositionErrorDataBase;
    status: number;
}

export interface AddEmployeePositionSchema {
    data: AddEmployeePositionType;
    isLoading: boolean;
    errors?: AddEmployeePositionErrors;
}
