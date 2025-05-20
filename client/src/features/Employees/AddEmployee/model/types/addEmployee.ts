import { ButtonTheme } from 'shared/ui/Button/Button';

export interface TabsType {
    id: number;
    title: string;
    theme: ButtonTheme;
    active: boolean;
}

export interface AddEmployeeType {
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
}

export interface AddEmployeeErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddEmployeeErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

export interface AddEmployeeErrorDataBaseGeneral {
    message: string;
}

export interface AddEmployeeErrorDataBase {
    validation: AddEmployeeErrorDataBaseValidation[];
    general: AddEmployeeErrorDataBaseGeneral[];
}

export interface AddEmployeeErrors {
    errors?: AddEmployeeErrorApi[] | AddEmployeeErrorDataBase;
    status: number;
}

export interface AddEmployeeSchema {
    data: AddEmployeeType;
    isLoading: boolean;
    errors?: AddEmployeeErrors;
}
