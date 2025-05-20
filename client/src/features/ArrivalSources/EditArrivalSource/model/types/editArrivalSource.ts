export interface EditArrivalSourceType {
    id_comesfrom: number;
    comesfrom: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditArrivalSourceErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditArrivalSourceErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditArrivalSourceErrorDataBaseGeneral {
    message: string;
}

export interface EditArrivalSourceErrorDataBase {
    validation: EditArrivalSourceErrorDataBaseValidation[];
    general: EditArrivalSourceErrorDataBaseGeneral[];
}

export interface EditArrivalSourceErrors {
    errors?: EditArrivalSourceErrorApi[] | EditArrivalSourceErrorDataBase;
    status: number;
}

export interface EditArrivalSourceSchema {
    data?: EditArrivalSourceType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditArrivalSourceErrors;
}
