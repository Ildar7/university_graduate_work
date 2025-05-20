export interface AddPracticeTypeType {
    title: string | null;
}

export interface AddPracticeTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddPracticeTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddPracticeTypeErrorDataBaseGeneral {
    message: string;
}

export interface AddPracticeTypeErrorDataBase {
    validation: AddPracticeTypeErrorDataBaseValidation[];
    general: AddPracticeTypeErrorDataBaseGeneral[];
}

export interface AddPracticeTypeErrors {
    errors?: AddPracticeTypeErrorApi[] | AddPracticeTypeErrorDataBase;
    status: number;
}

export interface AddPracticeTypeSchema {
    data: AddPracticeTypeType;
    isLoading: boolean;
    errors?: AddPracticeTypeErrors;
}
