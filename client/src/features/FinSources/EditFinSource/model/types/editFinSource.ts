export interface EditFinSourceType {
    id_whopaying: number;
    whopaying: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditFinSourceErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditFinSourceErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditFinSourceErrorDataBaseGeneral {
    message: string;
}

export interface EditFinSourceErrorDataBase {
    validation: EditFinSourceErrorDataBaseValidation[];
    general: EditFinSourceErrorDataBaseGeneral[];
}

export interface EditFinSourceErrors {
    errors?: EditFinSourceErrorApi[] | EditFinSourceErrorDataBase;
    status: number;
}

export interface EditFinSourceSchema {
    data?: EditFinSourceType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditFinSourceErrors;
}
