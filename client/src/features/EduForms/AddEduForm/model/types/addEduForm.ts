export interface AddEduFormType {
    title: string | null;
}

export interface AddEduFormErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEduFormErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEduFormErrorDataBaseGeneral {
    message: string;
}

export interface AddEduFormErrorDataBase {
    validation: AddEduFormErrorDataBaseValidation[];
    general: AddEduFormErrorDataBaseGeneral[];
}

export interface AddEduFormErrors {
    errors?: AddEduFormErrorApi[] | AddEduFormErrorDataBase;
    status: number;
}

export interface AddEduFormSchema {
    data: AddEduFormType;
    isLoading: boolean;
    errors?: AddEduFormErrors;
}
