export interface AddEduUnitType {
    name: string;
    sort: number | null;
}

export interface AddEduUnitErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEduUnitErrorDataBaseValidation {
    message: string,
    field: string,
    type: string,
    value: string
}

interface AddEduUnitErrorDataBaseGeneral {
    message: string,
}

export interface AddEduUnitErrorDataBase {
    validation: AddEduUnitErrorDataBaseValidation[];
    general: AddEduUnitErrorDataBaseGeneral[];
}

export interface AddEduUnitErrors {
    errors?: AddEduUnitErrorApi[] | AddEduUnitErrorDataBase;
    status: number;
}

export interface AddEduUnitSchema {
    data?: AddEduUnitType;
    isLoading: boolean;
    errors?: AddEduUnitErrors;
}
