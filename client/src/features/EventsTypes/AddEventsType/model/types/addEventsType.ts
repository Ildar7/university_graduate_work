export interface AddEventsTypeType {
    title: string | null;
}

export interface AddEventsTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEventsTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEventsTypeErrorDataBaseGeneral {
    message: string;
}

export interface AddEventsTypeErrorDataBase {
    validation: AddEventsTypeErrorDataBaseValidation[];
    general: AddEventsTypeErrorDataBaseGeneral[];
}

export interface AddEventsTypeErrors {
    errors?: AddEventsTypeErrorApi[] | AddEventsTypeErrorDataBase;
    status: number;
}

export interface AddEventsTypeSchema {
    data: AddEventsTypeType;
    isLoading: boolean;
    errors?: AddEventsTypeErrors;
}
