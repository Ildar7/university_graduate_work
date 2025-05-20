export interface EditEmployeeType {
    first_name: string | null;
    last_name: string | null;
    middle_name: string | null;
    phone_number: string | null;
    address: string | null;
    govid: string | null;
    birth_date: string | null;
    is_staff: boolean;
    date_of_employment: string | null;
    work_experience: number | null;
    teaching_experience: number | null;
    arrival_order_number: string | null;
    category_id: number | null;
    is_teacher: boolean;
    education_id: number | null;
    specialty: string | null;
    qualification: string | null;
    tariff_rate: string | null;
    positions?: number[];
}

export interface NewFieldsType {
    first_name?: string | null;
    last_name?: string | null;
    middle_name?: string | null;
    phone_number?: string | null;
    address?: string | null;
    govid?: string | null;
    birth_date?: string | null;
    is_staff?: boolean;
    date_of_employment?: string | null;
    work_experience?: number | null;
    teaching_experience?: number | null;
    arrival_order_number?: string | null;
    category_id?: number | null;
    is_teacher?: boolean;
    education_id?: number | null;
    specialty?: string | null;
    qualification?: string | null;
    tariff_rate?: string | null;
    positions?: number[];
}

export interface EditEmployeeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEmployeeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEmployeeErrorDataBaseGeneral {
    message: string;
}

export interface EditEmployeeErrorDataBase {
    validation: EditEmployeeErrorDataBaseValidation[];
    general: EditEmployeeErrorDataBaseGeneral[];
}

export interface EditEmployeeErrors {
    errors?: EditEmployeeErrorApi[] | EditEmployeeErrorDataBase;
    status: number;
}

export interface EditEmployeeSchema {
    data?: EditEmployeeType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditEmployeeErrors;
}
