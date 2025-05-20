export interface AddPerformanceTypeType {
    title: string | null;
    value: number | null;
}

export interface AddPerformanceTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddPerformanceTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddPerformanceTypeErrorDataBaseGeneral {
    message: string;
}

export interface AddPerformanceTypeErrorDataBase {
    validation: AddPerformanceTypeErrorDataBaseValidation[];
    general: AddPerformanceTypeErrorDataBaseGeneral[];
}

export interface AddPerformanceTypeErrors {
    errors?: AddPerformanceTypeErrorApi[] | AddPerformanceTypeErrorDataBase;
    status: number;
}

export interface AddPerformanceTypeSchema {
    data: AddPerformanceTypeType;
    isLoading: boolean;
    errors?: AddPerformanceTypeErrors;
}
