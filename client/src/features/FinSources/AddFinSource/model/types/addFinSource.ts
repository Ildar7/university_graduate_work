export interface AddFinSourceType {
    title: string | null;
}

export interface AddFinSourceErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddFinSourceErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddFinSourceErrorDataBaseGeneral {
    message: string;
}

export interface AddFinSourceErrorDataBase {
    validation: AddFinSourceErrorDataBaseValidation[];
    general: AddFinSourceErrorDataBaseGeneral[];
}

export interface AddFinSourceErrors {
    errors?: AddFinSourceErrorApi[] | AddFinSourceErrorDataBase;
    status: number;
}

export interface AddFinSourceSchema {
    data: AddFinSourceType;
    isLoading: boolean;
    errors?: AddFinSourceErrors;
}
