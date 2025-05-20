export interface EditEduFormType {
    id_typeoftraining: number;
    typeoftraining: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditEduFormErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEduFormErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEduFormErrorDataBaseGeneral {
    message: string;
}

export interface EditEduFormErrorDataBase {
    validation: EditEduFormErrorDataBaseValidation[];
    general: EditEduFormErrorDataBaseGeneral[];
}

export interface EditEduFormErrors {
    errors?: EditEduFormErrorApi[] | EditEduFormErrorDataBase;
    status: number;
}

export interface EditEduFormSchema {
    data?: EditEduFormType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEduFormErrors;
}
