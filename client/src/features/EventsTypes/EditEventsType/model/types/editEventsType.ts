export interface EditEventsTypeType {
    id_typeofevent: number;
    typeofevent: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditEventsTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEventsTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEventsTypeErrorDataBaseGeneral {
    message: string;
}

export interface EditEventsTypeErrorDataBase {
    validation: EditEventsTypeErrorDataBaseValidation[];
    general: EditEventsTypeErrorDataBaseGeneral[];
}

export interface EditEventsTypeErrors {
    errors?: EditEventsTypeErrorApi[] | EditEventsTypeErrorDataBase;
    status: number;
}

export interface EditEventsTypeSchema {
    data?: EditEventsTypeType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEventsTypeErrors;
}
