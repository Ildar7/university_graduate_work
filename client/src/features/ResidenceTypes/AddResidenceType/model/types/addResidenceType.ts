export interface AddResidenceTypeType {
    title: string | null;
}

export interface AddResidenceTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddResidenceTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddResidenceTypeErrorDataBaseGeneral {
    message: string;
}

export interface AddResidenceTypeErrorDataBase {
    validation: AddResidenceTypeErrorDataBaseValidation[];
    general: AddResidenceTypeErrorDataBaseGeneral[];
}

export interface AddResidenceTypeErrors {
    errors?: AddResidenceTypeErrorApi[] | AddResidenceTypeErrorDataBase;
    status: number;
}

export interface AddResidenceTypeSchema {
    data: AddResidenceTypeType;
    isLoading: boolean;
    errors?: AddResidenceTypeErrors;
}
