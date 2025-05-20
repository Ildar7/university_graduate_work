export interface AddSpecialityType {
    title: string | null;
    code: string | null;
}

export interface AddSpecialityErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddSpecialityErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddSpecialityErrorDataBaseGeneral {
    message: string;
}

export interface AddSpecialityErrorDataBase {
    validation: AddSpecialityErrorDataBaseValidation[];
    general: AddSpecialityErrorDataBaseGeneral[];
}

export interface AddSpecialityErrors {
    errors?: AddSpecialityErrorApi[] | AddSpecialityErrorDataBase;
    status: number;
}

export interface AddSpecialitySchema {
    data: AddSpecialityType;
    isLoading: boolean;
    errors?: AddSpecialityErrors;
}
