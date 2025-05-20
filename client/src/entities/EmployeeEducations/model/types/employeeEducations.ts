import { EmployeesType } from 'entities/Employees';

export interface EmployeeEducationsType {
    education_id: number;
    name: string;
    employees: Omit<EmployeesType[], 'fio' | 'category' | 'education' | 'positions' | 'subjects'>;
}

export interface EmployeeEducationsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EmployeeEducationsData {
    data: EmployeeEducationsType[];
    pagination: EmployeeEducationsPagination | null;
}

export interface EmployeeEducationsError {
    status: number;
    error: string;
}
export interface EmployeeEducationsSchema {
    data?: EmployeeEducationsData;
    isLoading: boolean;
    error?: EmployeeEducationsError;
    page: string;
    limit: string;
}
