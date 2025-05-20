export interface EditSpecialityType {
    id_spec: number;
    shifr_spec: string;
    speciality: string;
}

export interface NewFieldsType {
    title?: string | null;
    code?: string | null;
}

export interface EditSpecialityErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditSpecialityErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditSpecialityErrorDataBaseGeneral {
    message: string;
}

export interface EditSpecialityErrorDataBase {
    validation: EditSpecialityErrorDataBaseValidation[];
    general: EditSpecialityErrorDataBaseGeneral[];
}

export interface EditSpecialityErrors {
    errors?: EditSpecialityErrorApi[] | EditSpecialityErrorDataBase;
    status: number;
}

export interface EditSpecialitySchema {
    data?: EditSpecialityType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditSpecialityErrors;
}
