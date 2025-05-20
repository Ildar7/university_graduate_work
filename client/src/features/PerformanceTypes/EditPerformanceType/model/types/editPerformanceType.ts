export interface EditPerformanceTypeType {
    id_academicperformancesemester: number;
    academicperformancesemester: string;
    perfomance_value: number;
}

export interface NewFieldsType {
    title?: string | null;
    value?: number | null;
}

export interface EditPerformanceTypeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditPerformanceTypeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditPerformanceTypeErrorDataBaseGeneral {
    message: string;
}

export interface EditPerformanceTypeErrorDataBase {
    validation: EditPerformanceTypeErrorDataBaseValidation[];
    general: EditPerformanceTypeErrorDataBaseGeneral[];
}

export interface EditPerformanceTypeErrors {
    errors?: EditPerformanceTypeErrorApi[] | EditPerformanceTypeErrorDataBase;
    status: number;
}

export interface EditPerformanceTypeSchema {
    data?: EditPerformanceTypeType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditPerformanceTypeErrors;
}
