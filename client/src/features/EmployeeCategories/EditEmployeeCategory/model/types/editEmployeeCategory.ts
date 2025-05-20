export interface EditEmployeeCategoryType {
    name: string | null;
}

export interface NewFieldsType {
    name?: string | null;
}

export interface EditEmployeeCategoryErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEmployeeCategoryErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEmployeeCategoryErrorDataBaseGeneral {
    message: string;
}

export interface EditEmployeeCategoryErrorDataBase {
    validation: EditEmployeeCategoryErrorDataBaseValidation[];
    general: EditEmployeeCategoryErrorDataBaseGeneral[];
}

export interface EditEmployeeCategoryErrors {
    errors?: EditEmployeeCategoryErrorApi[] | EditEmployeeCategoryErrorDataBase;
    status: number;
}

export interface EditEmployeeCategorySchema {
    data?: EditEmployeeCategoryType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEmployeeCategoryErrors;
}
