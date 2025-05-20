export interface AddEmployeeCategoryType {
    name: string | null;
}

export interface AddEmployeeCategoryErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEmployeeCategoryErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddEmployeeCategoryErrorDataBaseGeneral {
    message: string;
}

export interface AddEmployeeCategoryErrorDataBase {
    validation: AddEmployeeCategoryErrorDataBaseValidation[];
    general: AddEmployeeCategoryErrorDataBaseGeneral[];
}

export interface AddEmployeeCategoryErrors {
    errors?: AddEmployeeCategoryErrorApi[] | AddEmployeeCategoryErrorDataBase;
    status: number;
}

export interface AddEmployeeCategorySchema {
    data: AddEmployeeCategoryType;
    isLoading: boolean;
    errors?: AddEmployeeCategoryErrors;
}
