export interface AddEduModuleType {
    name: string;
    short_name: string;
    basic_education: false;
    sort: number | null;
    study_time_in_credits: number | null;
}

export interface AddEduModuleErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEduModuleErrorDataBaseValidation {
    message: string,
    field: string,
    type: string,
    value: string
}

interface AddEduModuleErrorDataBaseGeneral {
    message: string,
}

export interface AddEduModuleErrorDataBase {
    validation: AddEduModuleErrorDataBaseValidation[];
    general: AddEduModuleErrorDataBaseGeneral[];
}

export interface AddEduModuleErrors {
    errors?: AddEduModuleErrorApi[] | AddEduModuleErrorDataBase;
    status: number;
}

export interface AddEduModuleSchema {
    data?: AddEduModuleType;
    isLoading: boolean;
    errors?: AddEduModuleErrors;
}
