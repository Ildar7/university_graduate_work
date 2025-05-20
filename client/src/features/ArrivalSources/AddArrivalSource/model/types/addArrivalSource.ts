export interface AddArrivalSourceType {
    title: string | null;
}

export interface AddArrivalSourceErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddArrivalSourceErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddArrivalSourceErrorDataBaseGeneral {
    message: string;
}

export interface AddArrivalSourceErrorDataBase {
    validation: AddArrivalSourceErrorDataBaseValidation[];
    general: AddArrivalSourceErrorDataBaseGeneral[];
}

export interface AddArrivalSourceErrors {
    errors?: AddArrivalSourceErrorApi[] | AddArrivalSourceErrorDataBase;
    status: number;
}

export interface AddArrivalSourceSchema {
    data: AddArrivalSourceType;
    isLoading: boolean;
    errors?: AddArrivalSourceErrors;
}
