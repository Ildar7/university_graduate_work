export interface EditResidenceTypeType {
    id_typeofareaofresidence: number;
    typeofareaofresidence: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditResidenceTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditResidenceTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditResidenceTypeErrorDataBaseGeneral {
    message: string;
}

export interface EditResidenceTypeErrorDataBase {
    validation: EditResidenceTypeErrorDataBaseValidation[];
    general: EditResidenceTypeErrorDataBaseGeneral[];
}

export interface EditResidenceTypeErrors {
    errors?: EditResidenceTypeErrorApi[] | EditResidenceTypeErrorDataBase;
    status: number;
}

export interface EditResidenceTypeSchema {
    data?: EditResidenceTypeType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditResidenceTypeErrors;
}
